import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import LegalContent from './LegalContent'
import { SITE_URL } from '@/lib/constants'

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies()
  const lang = cookieStore.get('portfolio-language')?.value === 'en' ? 'en' : 'es'

  const title = lang === 'en' ? 'Legal Notice - Privacy & Terms' : 'Aviso Legal - Privacidad y Términos'
  const desc = lang === 'en'
    ? 'Legal notice, privacy policy, and cookie policy for Maider Barrutia portfolio. Read about data protection, terms of use, and your privacy rights.'
    : 'Aviso legal, política de privacidad y cookies del portfolio de Maider Barrutia. Información sobre protección de datos, términos de uso y derechos.'

  return {
    title,
    description: desc,
    alternates: {
      canonical: `${SITE_URL}/legal`,
      languages: {
        es: `${SITE_URL}/legal`,
        en: `${SITE_URL}/legal`,
      },
    },
    openGraph: {
      title: `${title} | Maider Barrutia`,
      description: desc,
      type: 'website',
      siteName: 'Maider Barrutia',
      locale: lang === 'en' ? 'en_US' : 'es_ES',
      alternateLocale: lang === 'en' ? 'es_ES' : 'en_US',
      url: `${SITE_URL}/legal`,
      images: [
        {
          url: '/og-image.svg',
          width: 1200,
          height: 630,
          alt: `${title} | Maider Barrutia`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Maider Barrutia`,
      description: desc,
      images: ['/og-image.svg'],
    },
  }
}

export default function LegalPage() {
  return <LegalContent />
}
