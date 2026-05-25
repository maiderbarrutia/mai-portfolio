import type { Metadata } from 'next'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import ClientProviders from '@/components/ClientProviders'
import { LanguageProvider } from '@/context/LanguageContext'
import '@/styles/globals.scss'

const siteUrl = 'https://maiderbarrutia.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Maider Barrutia | Fullstack Developer & UI Architect',
  description: 'Desarrolladora FullStack especializada en SASS, React.js, TypeScript y arquitecturas escalables. Optimizando la lógica backend y el diseño UI con flujos de trabajo de IA para crear aplicaciones de alto rendimiento.',
  keywords: ['Frontend Developer', 'React', 'TypeScript', 'Next.js', 'Web Development'],
  authors: [{ name: 'Maider Barrutia' }],
  openGraph: {
    title: 'Maider Barrutia | Fullstack Developer & UI Architect',
    description: 'Desarrolladora Frontend especializada en crear experiencias web excepcionales',
    type: 'website',
    siteName: 'Maider Barrutia Portfolio',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maider Barrutia | Fullstack Developer & UI Architect',
    description: 'Desarrolladora FullStack especializada en SASS, React.js, TypeScript y arquitecturas escalables. Optimizando la lógica backend y el diseño UI con flujos de trabajo de IA para crear aplicaciones de alto rendimiento.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Maider Barrutia',
  jobTitle: 'Fullstack Developer & UI Architect',
  url: siteUrl,
  sameAs: [
    'https://github.com/maiderbarrutia',
    'https://linkedin.com/in/maiderbarrutia',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'}document.documentElement.setAttribute('data-theme',t)}catch(e){}})()`
        }} />
      </head>
      <body suppressHydrationWarning>
         <ClientProviders>
          <LanguageProvider>
            {children}
            {process.env.NODE_ENV === 'production' && <Analytics />}
          </LanguageProvider>
        </ClientProviders>
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
