import type { Metadata } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/context/LanguageContext'
import '@/styles/globals.scss'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
})

const siteUrl = 'https://maiderbarrutia.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Maider Barrutia | Frontend Developer',
  description: 'Portfolio de Maider Barrutia - Desarrolladora Frontend especializada en React, TypeScript y experiencias web modernas',
  keywords: ['Frontend Developer', 'React', 'TypeScript', 'Next.js', 'Web Development'],
  authors: [{ name: 'Maider Barrutia' }],
  openGraph: {
    title: 'Maider Barrutia | Frontend Developer',
    description: 'Desarrolladora Frontend especializada en crear experiencias web excepcionales',
    type: 'website',
    siteName: 'Maider Barrutia Portfolio',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maider Barrutia | Frontend Developer',
    description: 'Desarrolladora Frontend especializada en crear experiencias web excepcionales',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
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
  jobTitle: 'Fullstack Engineer & UX Architect',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${firaCode.variable}`}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
            {process.env.NODE_ENV === 'production' && <Analytics />}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
