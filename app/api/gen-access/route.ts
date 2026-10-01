import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import {
  isValidOrigin,
  getClientIp,
  rateLimitCheck,
  verifyMasterSession,
  normalizeLabel,
  buildRecruiterToken,
  expiryDate,
} from '@/lib/access';

const requestSchema = z.object({
  session: z.string().min(1),
  label: z.string().min(1).max(80),
  days: z.union([
    z.literal(7),
    z.literal(30),
    z.literal(60),
    z.literal(90),
    z.literal(180),
  ]),
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

export async function POST(request: NextRequest) {
  if (!isValidOrigin(request)) {
    return json({ error: 'Invalid origin' }, 403);
  }

  const ip = getClientIp(request);
  if (!rateLimitCheck(ip, 'gen-access', 20, 3_600_000)) {
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
    return json({ error: 'invalid_request' }, 400);
  }

  if (!verifyMasterSession(result.data.session)) {
    console.log(`[otros-proyectos] gen denied ip=${ip}`);
    return json({ error: 'session' }, 401);
  }

  const label = normalizeLabel(result.data.label);
  if (!label) {
    return json({ error: 'label' }, 400);
  }

  const days = result.data.days;
  const date = expiryDate(days);
  const password = buildRecruiterToken(label, date);
  if (!password) {
    return json({ error: 'Server configuration error' }, 500);
  }

  console.log(
    `[otros-proyectos] gen codigo=${password} etiqueta=${label} hasta=${date} ip=${ip}`
  );

  return json({ password, label, expiresAt: date });
}
