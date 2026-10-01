import { createHmac, timingSafeEqual } from 'node:crypto';
import type { NextRequest } from 'next/server';
import { SITE_URL } from '@/lib/constants';

const vercelUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null;
const extraOrigins =
  process.env.CORS_ORIGINS?.split(',')
    .map((s) => s.trim())
    .filter(Boolean) || [];

export const ALLOWED_ORIGINS = [
  SITE_URL,
  ...(vercelUrl ? [vercelUrl] : []),
  ...extraOrigins,
  'http://localhost:3000',
  'http://localhost:3001',
].filter((s): s is string => Boolean(s));

export function isValidOrigin(request: NextRequest): boolean {
  const origin = request.headers.get('origin');
  const referer = request.headers.get('referer');

  if (origin && !ALLOWED_ORIGINS.includes(origin)) return false;
  if (referer && !ALLOWED_ORIGINS.some((o) => referer.startsWith(o))) return false;
  return true;
}

export function getClientIp(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip')?.trim() ||
    'unknown'
  );
}

const rateLimit = new Map<string, { count: number; resetAt: number }>();

export function rateLimitCheck(
  ip: string,
  purpose: string,
  max: number,
  windowMs: number
): boolean {
  const key = `${purpose}:${ip}`;
  const now = Date.now();
  const entry = rateLimit.get(key);

  if (!entry || now > entry.resetAt) {
    rateLimit.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (entry.count >= max) return false;
  entry.count++;
  return true;
}

export function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a, 'utf8');
  const bufB = Buffer.from(b, 'utf8');
  if (bufA.length !== bufB.length) {
    timingSafeEqual(bufA, bufA);
    return false;
  }
  return timingSafeEqual(bufA, bufB);
}

function signingKey(): Buffer | null {
  const keyHex = process.env.OTROS_PROYECTOS_KEY;
  const master = process.env.OTROS_PROYECTOS_PASSWORD;
  if (!keyHex || !/^[0-9a-f]{64}$/i.test(keyHex) || !master) return null;
  return createHmac('sha256', Buffer.from(keyHex, 'hex')).update(master).digest();
}

function hmac(msg: string): string | null {
  const key = signingKey();
  if (!key) return null;
  return createHmac('sha256', key).update(msg).digest('base64url');
}

// ---------------------------------------------------------------------------
// Sesión de maestra — `${expUnixSec}.${sig}`, TTL 1 hora, estado puro (HMAC)
// ---------------------------------------------------------------------------

const SESSION_TTL_SEC = 3600;

export function signMasterSession(): string | null {
  const exp = Math.floor(Date.now() / 1000) + SESSION_TTL_SEC;
  const sig = hmac(`session:${exp}`);
  return sig ? `${exp}.${sig}` : null;
}

export function verifyMasterSession(token: string | null | undefined): boolean {
  if (!token) return false;
  const [expStr, sig] = token.split('.');
  const exp = Number(expStr);
  if (!expStr || !sig || !Number.isFinite(exp)) return false;
  if (Math.floor(Date.now() / 1000) > exp) return false;
  const expected = hmac(`session:${exp}`);
  return expected !== null && safeEqual(sig, expected);
}

// ---------------------------------------------------------------------------
// Contraseñas de reclutador — `${label}.${YYYY-MM-DD}.${sig}`
// ---------------------------------------------------------------------------

export const ALLOWED_DAYS = [7, 30, 60, 90, 180] as const;

export function normalizeLabel(raw: string): string | null {
  const label = raw.trim().replace(/\s+/g, ' ');
  if (!label || label.includes('.') || label.length > 50) return null;
  return label;
}

export function expiryDate(days: number): string {
  return new Date(Date.now() + days * 86_400_000).toISOString().slice(0, 10);
}

export function buildRecruiterToken(label: string, date: string): string | null {
  const sig = hmac(`${label}.${date}`);
  return sig ? `${label}.${date}.${sig}` : null;
}

export type TokenCheck =
  | { status: 'ok'; label: string }
  | { status: 'expired'; label: string }
  | { status: 'invalid' };

export function verifyRecruiterToken(token: string): TokenCheck {
  const parts = token.split('.');
  if (parts.length !== 3) return { status: 'invalid' };
  const [label, date, sig] = parts;
  if (!label || !/^\d{4}-\d{2}-\d{2}$/.test(date) || !sig) return { status: 'invalid' };

  const expected = hmac(`${label}.${date}`);
  if (!expected || !safeEqual(sig, expected)) return { status: 'invalid' };

  const today = new Date().toISOString().slice(0, 10);
  if (date < today) return { status: 'expired', label };
  return { status: 'ok', label };
}
