import { NextRequest, NextResponse } from 'next/server';
import { timingSafeEqual, createDecipheriv } from 'node:crypto';
import { z } from 'zod';
import { SITE_URL } from '@/lib/constants';
import encryptedPayload from '@/app/otros-proyectos/data.enc.json';

const projectSchema = z.object({
  title: z.string().min(1),
  url: z.string().url(),
  description: z.string().min(1),
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

const vercelUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null;
const extraOrigins =
  process.env.CORS_ORIGINS?.split(',')
    .map((s) => s.trim())
    .filter(Boolean) || [];

const ALLOWED_ORIGINS = [
  SITE_URL,
  ...(vercelUrl ? [vercelUrl] : []),
  ...extraOrigins,
  'http://localhost:3000',
  'http://localhost:3001',
].filter((s): s is string => Boolean(s));

const MAX_ATTEMPTS = 10;
const WINDOW_MS = 900_000; // 15 min
const rateLimit = new Map<string, { count: number; resetAt: number }>();

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip')?.trim() ||
    'unknown'
  );
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }

  if (entry.count >= MAX_ATTEMPTS) return false;

  entry.count++;
  return true;
}

function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a, 'utf8');
  const bufB = Buffer.from(b, 'utf8');
  if (bufA.length !== bufB.length) {
    timingSafeEqual(bufA, bufA);
    return false;
  }
  return timingSafeEqual(bufA, bufB);
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
  const origin = request.headers.get('origin');
  const referer = request.headers.get('referer');

  if (origin && !ALLOWED_ORIGINS.includes(origin)) {
    return json({ error: 'Invalid origin' }, 403);
  }

  if (referer) {
    const isValid = ALLOWED_ORIGINS.some((o) => referer.startsWith(o));
    if (!isValid) {
      return json({ error: 'Invalid referer' }, 403);
    }
  }

  const ip = getClientIp(request);
  if (!checkRateLimit(ip)) {
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

  const expected = process.env.OTROS_PROYECTOS_PASSWORD;
  if (!expected) {
    return json({ error: 'Server configuration error' }, 500);
  }

  if (!safeEqual(result.data.password, expected)) {
    return json({ error: 'Invalid password' }, 401);
  }

  let projects: ReturnType<typeof decryptProjects>;
  try {
    projects = decryptProjects();
  } catch {
    projects = null;
  }

  if (!projects) {
    return json({ error: 'Server configuration error' }, 500);
  }

  return json({ projects });
}