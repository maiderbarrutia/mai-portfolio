import { NextRequest, NextResponse } from 'next/server';
import { createDecipheriv } from 'node:crypto';
import { z } from 'zod';
import encryptedPayload from '@/app/otros-proyectos/data.enc.json';
import {
  isValidOrigin,
  getClientIp,
  rateLimitCheck,
  safeEqual,
  signMasterSession,
  verifyRecruiterToken,
} from '@/lib/access';

const projectSchema = z.object({
  title: z.string().min(1),
  url: z.string().url(),
  description: z.preprocess(
    (v) => (v === '' || v === null ? undefined : v),
    z.string().min(1).optional()
  ),
  tech: z.array(z.string().min(1)),
  accent: z.boolean().optional(),
});

const projectsSchema = z.array(projectSchema).min(1);

const requestSchema = z.object({
  password: z.string().min(1, 'Password required'),
});

function json(data: unknown, status = 200) {
  return NextResponse.json(data, {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'X-Robots-Tag': 'noindex, nofollow, noarchive',
    },
  });
}

function decryptProjects() {
  const keyHex = process.env.OTROS_PROYECTOS_KEY;
  if (!keyHex || !/^[0-9a-f]{64}$/i.test(keyHex)) return null;

  const decipher = createDecipheriv(
    'aes-256-gcm',
    Buffer.from(keyHex, 'hex'),
    Buffer.from(encryptedPayload.iv, 'base64')
  );
  decipher.setAuthTag(Buffer.from(encryptedPayload.tag, 'base64'));
  const plain = Buffer.concat([
    decipher.update(Buffer.from(encryptedPayload.data, 'base64')),
    decipher.final(),
  ]).toString('utf8');

  const parsed = projectsSchema.safeParse(JSON.parse(plain));
  return parsed.success ? parsed.data : null;
}

export async function POST(request: NextRequest) {
  if (!isValidOrigin(request)) {
    return json({ error: 'Invalid origin' }, 403);
  }

  const ip = getClientIp(request);
  if (!rateLimitCheck(ip, 'login', 10, 900_000)) {
    return json({ error: 'Too many attempts. Try again later.' }, 429);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid JSON' }, 400);
  }

  const result = requestSchema.safeParse(body);
  if (!result.success) {
    return json({ error: 'Password required' }, 400);
  }

  const { password } = result.data;
  const expected = process.env.OTROS_PROYECTOS_PASSWORD;
  if (!expected) {
    return json({ error: 'Server configuration error' }, 500);
  }

  let via: 'master' | 'token';

  if (safeEqual(password, expected)) {
    via = 'master';
    console.log(`[otros-proyectos] login via=master ip=${ip}`);
  } else {
    const check = verifyRecruiterToken(password);
    if (check.status === 'invalid') {
      console.log(`[otros-proyectos] login fail ip=${ip}`);
      return json({ error: 'invalid_password' }, 401);
    }
    if (check.status === 'expired') {
      console.log(
        `[otros-proyectos] login expired codigo=${password} etiqueta=${check.label} exp=${check.date} ip=${ip}`
      );
      return json({ error: 'expired' }, 401);
    }
    via = 'token';
    console.log(
      `[otros-proyectos] login via=token codigo=${password} etiqueta=${check.label} exp=${check.date} ip=${ip}`
    );
  }

  const projects = decryptProjects();
  if (!projects) {
    return json({ error: 'Server configuration error' }, 500);
  }

  if (via === 'master') {
    const session = signMasterSession();
    if (!session) {
      return json({ error: 'Server configuration error' }, 500);
    }
    return json({ projects, via, session });
  }

  return json({ projects, via });
}
