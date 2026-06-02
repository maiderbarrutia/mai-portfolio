import type { Metadata } from 'next'
import LegalContent from './LegalContent'

const siteUrl = 'https://maiderbarrutia.vercel.app'

export const metadata: Metadata = {
  title: 'Legal Notice | Maider Barrutia',
  description: 'Legal notice, privacy policy, and cookie information for Maider Barrutia portfolio website.',
  alternates: {
    canonical: `${siteUrl}/legal`,
  },
  openGraph: {
    title: 'Legal Notice | Maider Barrutia',
    description: 'Legal notice, privacy policy, and cookie information.',
  },
}

export default function LegalPage() {
  return <LegalContent />
}
