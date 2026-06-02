import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import LegalContent from './LegalContent'

const siteUrl = 'https://maiderbarrutia.vercel.app'

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies()
  const lang = cookieStore.get('portfolio-language')?.value === 'en' ? 'en' : 'es'

  const title = lang === 'en' ? 'Legal Notice' : 'Aviso Legal'
  const desc = lang === 'en'
    ? 'Legal notice, privacy policy, and cookie information for Maider Barrutia portfolio website. Read about data protection, terms of use, and your rights regarding personal data.'
    : 'Aviso legal, política de privacidad e información sobre cookies para el portfolio de Maider Barrutia. Conoce la protección de datos, términos de uso y tus derechos.'

  return {
    title,
    description: desc,
    alternates: {
      canonical: `${siteUrl}/legal`,
    },
    openGraph: {
      title: `${title} | Maider Barrutia`,
      description: desc,
      locale: lang === 'en' ? 'en_US' : 'es_ES',
      alternateLocale: lang === 'en' ? 'es_ES' : 'en_US',
      images: [
        {
          url: `${siteUrl}/og-image.svg`,
          width: 1200,
          height: 630,
          alt: `${title} | Maider Barrutia`,
        },
      ],
    },
    twitter: {
      images: [`${siteUrl}/og-image.svg`],
    },
  }
}

export default function LegalPage() {
  return <LegalContent />
}
