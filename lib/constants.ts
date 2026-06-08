const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL

if (!rawSiteUrl) {
  throw new Error(
    'NEXT_PUBLIC_SITE_URL environment variable is required. ' +
    'Set it in .env or Vercel project settings.'
  )
}

export const SITE_URL = rawSiteUrl.replace(/\/+$/, '')

export function pageTitle(title: string) {
  return `${title} | Maider Barrutia`
}
