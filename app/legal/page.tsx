import type { Metadata } from 'next'
import LegalContent from './LegalContent'
import { SITE_URL, pageTitle } from '@/lib/constants'

export const metadata: Metadata = {
  title: pageTitle('Aviso Legal - Privacidad y Términos'),
  description: 'Aviso legal, política de privacidad y cookies del portfolio de Maider Barrutia. Información sobre protección de datos, términos de uso y derechos.',
  alternates: {
    canonical: `${SITE_URL}/legal`,
    languages: {
      es: `${SITE_URL}/legal`,
      en: `${SITE_URL}/en/legal`,
    },
  },
  openGraph: {
    title: pageTitle('Aviso Legal - Privacidad y Términos'),
    description: 'Aviso legal, política de privacidad y cookies del portfolio de Maider Barrutia. Información sobre protección de datos, términos de uso y derechos.',
    type: 'website',
    siteName: 'Maider Barrutia',
    locale: 'es_ES',
    alternateLocale: 'en_US',
    url: `${SITE_URL}/legal`,
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: pageTitle('Aviso Legal - Privacidad y Términos'),
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle('Aviso Legal - Privacidad y Términos'),
    description: 'Aviso legal, política de privacidad y cookies del portfolio de Maider Barrutia. Información sobre protección de datos, términos de uso y derechos.',
    images: ['/og-image.svg'],
  },
}

export default function LegalPage() {
  return <LegalContent />
}
