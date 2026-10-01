import { createHmac, randomBytes, timingSafeEqual } from 'node:crypto';
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
// Contraseñas de reclutador — código opaco que lleva dentro, cifrado, la
// etiqueta y la fecha de caducidad. Estructura en bytes:
//   [fechaXor 2][nonce 3][etiqueta XOR keystream N][HMAC 6]
// El reclutador solo ve la cadena opaca; el servidor descifra la etiqueta y
// la escribe en el log de acceso. Sin base de datos: todo es stateless.
// ---------------------------------------------------------------------------

export const ALLOWED_DAYS = [7, 30, 60, 90, 180] as const;

const TOKEN_EPOCH = Date.parse('2024-01-01');
const MAX_LABEL_BYTES = 40;

export function normalizeLabel(raw: string): string | null {
  const label = raw.trim().replace(/\s+/g, ' ');
  if (
    !label ||
    label.includes('.') ||
    label.length > 50 ||
    Buffer.byteLength(label, 'utf8') > MAX_LABEL_BYTES
  ) {
    return null;
  }
  return label;
}

export function expiryDate(days: number): string {
  return new Date(Date.now() + days * 86_400_000).toISOString().slice(0, 10);
}

function dayNumber(date: string): number | null {
  const t = Date.parse(`${date}T00:00:00Z`);
  if (!Number.isFinite(t)) return null;
  const n = Math.round((t - TOKEN_EPOCH) / 86_400_000);
  return n >= 0 && n <= 0xffff ? n : null;
}

function dateFromDay(n: number): string {
  return new Date(TOKEN_EPOCH + n * 86_400_000).toISOString().slice(0, 10);
}

function dayPad(key: Buffer): number {
  const h = createHmac('sha256', key).update('otros-day-pad').digest();
  return (h[0] << 8) | h[1];
}

function labelKeystream(key: Buffer, dayXor: Buffer, rand: Buffer, len: number): Buffer {
  const info = Buffer.concat([Buffer.from('otros-enc'), dayXor, rand]);
  const blocks: Buffer[] = [];
  let total = 0;
  let counter = 0;
  while (total < len) {
    const block = createHmac('sha256', key)
      .update(info)
      .update(Buffer.from([counter++]))
      .digest();
    blocks.push(block);
    total += block.length;
  }
  return Buffer.concat(blocks).subarray(0, len);
}

function tokenMac(key: Buffer, head: Buffer): Buffer {
  return createHmac('sha256', key).update('otros-token').update(head).digest().subarray(0, 6);
}

export function buildRecruiterToken(label: string, date: string): string | null {
  const key = signingKey();
  const n = dayNumber(date);
  const norm = normalizeLabel(label);
  if (!key || n === null || !norm) return null;

  const labelBuf = Buffer.from(norm, 'utf8');

  const dayXor = Buffer.alloc(2);
  dayXor.writeUInt16BE((n ^ dayPad(key)) & 0xffff, 0);
  const rand = randomBytes(3);

  const encLabel = Buffer.from(labelBuf);
  const ks = labelKeystream(key, dayXor, rand, encLabel.length);
  for (let i = 0; i < encLabel.length; i++) encLabel[i] ^= ks[i];

  const head = Buffer.concat([dayXor, rand, encLabel]);
  return Buffer.concat([head, tokenMac(key, head)]).toString('base64url');
}

export type TokenCheck =
  | { status: 'ok'; date: string; label: string }
  | { status: 'expired'; date: string; label: string }
  | { status: 'invalid' };

export function verifyRecruiterToken(token: string): TokenCheck {
  const key = signingKey();
  if (!key) return { status: 'invalid' };

  const raw = Buffer.from(token, 'base64url');
  if (raw.toString('base64url') !== token) return { status: 'invalid' };

  const total = raw.length;
  if (total < 13 || total > 51) return { status: 'invalid' }; // 11 fijos + etiqueta 1..40

  const dayXor = raw.subarray(0, 2);
  const rand = raw.subarray(2, 5);
  const encLabel = raw.subarray(5, total - 6);
  const mac = raw.subarray(total - 6);

  const head = Buffer.concat([dayXor, rand, encLabel]);
  if (!timingSafeEqual(mac, tokenMac(key, head))) return { status: 'invalid' };

  const date = dateFromDay(dayXor.readUInt16BE(0) ^ dayPad(key));

  const labelBuf = Buffer.from(encLabel);
  const ks = labelKeystream(key, dayXor, rand, labelBuf.length);
  for (let i = 0; i < labelBuf.length; i++) labelBuf[i] ^= ks[i];
  const label = labelBuf.toString('utf8');
  if (normalizeLabel(label) !== label) return { status: 'invalid' };

  const today = new Date().toISOString().slice(0, 10);
  if (date < today) return { status: 'expired', date, label };
  return { status: 'ok', date, label };
}
