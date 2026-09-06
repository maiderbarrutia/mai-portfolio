import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export const dynamic = 'force-static'

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'llms.txt')

  try {
    const content = fs.readFileSync(filePath, 'utf-8')

    return new NextResponse(content, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    })
  } catch {
    return new NextResponse('Not found', { status: 404 })
  }
}
