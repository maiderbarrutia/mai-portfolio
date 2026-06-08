import type { Metadata } from 'next'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { pageTitle } from '@/lib/constants'
import styles from './not-found.module.scss'

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies()
  const isEn = cookieStore.get('portfolio-language')?.value === 'en'

  const title = pageTitle(isEn ? 'Page Not Found' : 'Página no encontrada')
  const description = isEn
    ? 'The page you are looking for does not exist or has been moved.'
    : 'La página que buscas no existe o ha sido movida.'

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      siteName: 'Maider Barrutia',
      locale: isEn ? 'en_US' : 'es_ES',
      alternateLocale: isEn ? 'es_ES' : 'en_US',
      images: [
        {
          url: '/og-image.svg',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.svg'],
    },
  }
}

export default async function NotFound() {
  const cookieStore = await cookies()
  const isEn = cookieStore.get('portfolio-language')?.value === 'en'

  const message = isEn ? 'Page not found' : 'Página no encontrada'
  const linkText = isEn ? 'Back to home' : 'Volver al inicio'

  return (
    <main id="main-content" className={styles['not-found']}>
      <h1 className={styles['not-found__title']}>404</h1>
      <p className={styles['not-found__message']}>{message}</p>
      <Link href="/" className={styles['not-found__link']}>
        {linkText}
      </Link>
    </main>
  )
}
