import type { Metadata } from 'next'
import LegalContent from '../../legal/LegalContent'
import { SITE_URL, pageTitle } from '@/lib/constants'

export const metadata: Metadata = {
  title: pageTitle('Legal Notice - Privacy & Terms'),
  description: 'Legal notice, privacy policy, and cookie policy for Maider Barrutia portfolio. Read about data protection, terms of use, and your privacy rights.',
  alternates: {
    canonical: `${SITE_URL}/en/legal`,
    languages: {
      es: `${SITE_URL}/legal`,
      en: `${SITE_URL}/en/legal`,
    },
  },
  openGraph: {
    title: pageTitle('Legal Notice - Privacy & Terms'),
    description: 'Legal notice, privacy policy, and cookie policy for Maider Barrutia portfolio. Read about data protection, terms of use, and your privacy rights.',
    type: 'website',
    siteName: 'Maider Barrutia',
    locale: 'en_US',
    alternateLocale: 'es_ES',
    url: `${SITE_URL}/en/legal`,
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: pageTitle('Legal Notice - Privacy & Terms'),
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle('Legal Notice - Privacy & Terms'),
    description: 'Legal notice, privacy policy, and cookie policy for Maider Barrutia portfolio. Read about data protection, terms of use, and your privacy rights.',
    images: ['/og-image.svg'],
  },
}

export default function LegalPage() {
  return <LegalContent />
}
