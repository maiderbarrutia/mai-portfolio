import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { SITE_URL } from '@/lib/constants'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

const vercelUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : null
const extraOrigins = process.env.CORS_ORIGINS
  ?.split(',')
  .map((s) => s.trim())
  .filter(Boolean) || []

const ALLOWED_ORIGINS = [
  SITE_URL,
  ...(vercelUrl ? [vercelUrl] : []),
  ...extraOrigins,
  'http://localhost:3000',
  'http://localhost:3001',
].filter((s): s is string => Boolean(s))

const rateLimit = new Map<string, { count: number; resetAt: number }>()

function getClientIp(request: NextRequest): string {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    || request.headers.get('x-real-ip')?.trim()
    || 'unknown'
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimit.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + 3_600_000 })
    return true
  }

  if (entry.count >= 5) return false

  entry.count++
  return true
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin')
  const referer = request.headers.get('referer')

  if (origin && !ALLOWED_ORIGINS.includes(origin)) {
    return NextResponse.json({ error: 'Invalid origin' }, { status: 403 })
  }

  if (referer) {
    const isValid = ALLOWED_ORIGINS.some((o) => referer.startsWith(o))
    if (!isValid) {
      return NextResponse.json({ error: 'Invalid referer' }, { status: 403 })
    }
  }

  const ip = getClientIp(request)
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    )
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const result = contactSchema.safeParse(body)
  if (!result.success) {
    return NextResponse.json(
      { error: result.error.issues.map((i) => i.message).join(', ') },
      { status: 400 }
    )
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY
  if (!accessKey) {
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
  }

  return NextResponse.json({ accessKey })
}
