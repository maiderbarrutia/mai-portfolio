import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(request: NextRequest) {
  const lang = request.nextUrl.searchParams.get('lang') || 'es'
  const fileName = lang === 'en' ? 'cv-maider-barrutia-en.pdf' : 'cv-maider-barrutia.pdf'
  const filePath = path.join(process.cwd(), 'private', 'cv', fileName)

  try {
    const buffer = fs.readFileSync(filePath)

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${fileName}"`,
        'X-Robots-Tag': 'noindex, nofollow',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    })
  } catch {
    return NextResponse.json({ error: 'CV not found' }, { status: 404 })
  }
}
