import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import ClientProviders from '@/components/ClientProviders'
import { LanguageProvider } from '@/context/LanguageContext'
import SkipLink from '@/components/SkipLink/SkipLink'
import { SITE_URL } from '@/lib/constants'
import '@/styles/globals.scss'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Maider Barrutia | FullStack Developer & UI Specialist',
  description: 'Portfolio web enfocado en interfaz y maquetación avanzada. SASS, React, Node.js e IA para crear productos rápidos (WPO), accesibles y pixel-perfect.',
  applicationName: 'Maider Barrutia',
  keywords: [
    'FullStack Developer', 'Frontend Developer', 'Software Engineer', 'UI Specialist', 'Web developer',
    'React', 'TypeScript', 'Next.js', 'Node.js', 'JavaScript', 'Git', 'Vite', 'WordPress',
    'UI Design', 'UX Design', 'Sass', 'Tailwind CSS', 'figma',
    'AI-Driven Development', 'AI Integration', 'Scalable Solutions',
  ],
  authors: [{ name: 'Maider Barrutia' }],
  openGraph: {
    title: 'Maider Barrutia | FullStack Developer & UI Specialist',
    description: 'Portfolio web enfocado en interfaz y maquetación avanzada. SASS, React, Node.js e IA para crear productos rápidos (WPO), accesibles y pixel-perfect.',
    type: 'website',
    siteName: 'Maider Barrutia',
    locale: 'es_ES',
    alternateLocale: 'en_US',
    url: SITE_URL,
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Maider Barrutia | FullStack Developer & UI Specialist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maider Barrutia | FullStack Developer & UI Specialist',
    description: 'Portfolio web enfocado en interfaz y maquetación avanzada. SASS, React, Node.js e IA para crear productos rápidos (WPO), accesibles y pixel-perfect.',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: '/apple-icon.png',
  },
  alternates: {
    languages: {
      es: SITE_URL,
      en: `${SITE_URL}/en`,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Maider Barrutia',
      givenName: 'Maider',
      familyName: 'Barrutia',
      jobTitle: 'FullStack Developer & UI Specialist',
      description: 'Portfolio web enfocado en interfaz y maquetación avanzada. SASS, React, Node.js e IA para crear productos rápidos (WPO), accesibles y pixel-perfect.',
      url: SITE_URL,
      image: `${SITE_URL}/mai-logo.svg`,
      sameAs: [
        'https://github.com/maiderbarrutia',
        'https://linkedin.com/in/maiderbarrutiaunzueta',
      ],
      knowsAbout: [
        'FullStack Developer', 'Frontend Developer', 'Software Engineer', 'UI Specialist', 'Web developer',
        'React', 'TypeScript', 'Next.js', 'Node.js', 'JavaScript', 'Git', 'Vite', 'WordPress',
        'UI Design', 'UX Design', 'Sass', 'Tailwind CSS', 'figma',
        'AI-Driven Development', 'AI Integration', 'Scalable Solutions',
      ],
      alumniOf: [
        {
          '@type': 'EducationalOrganization',
          name: 'Ilerna Online',
          description: 'Técnico superior en Desarrollo de Aplicaciones Web (DAW)',
        },
        {
          '@type': 'EducationalOrganization',
          name: 'Instituto Ibarrekolanda de Bilbao',
          description: 'Técnico superior de Artes Plásticas y Diseño en Gráfica Publicitaria',
        },
      ],
      skills: [
        'React', 'TypeScript', 'Next.js', 'JavaScript', 'HTML5',
        'CSS3/SCSS', 'Tailwind CSS', 'Node.js', 'MySQL',
        'Figma', 'Git', 'Responsive Design', 'UI/UX Design',
      ],
      workLocation: {
        '@type': 'Place',
        address: { '@type': 'PostalAddress', addressLocality: 'Spain' },
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Maider Barrutia',
      alternateName: ['Maider Barrutia', 'Maider Barrutia Portfolio'],
      description: 'Portfolio web enfocado en interfaz y maquetación avanzada. SASS, React, Node.js e IA para crear productos rápidos (WPO), accesibles y pixel-perfect.',
      inLanguage: ['es', 'en'],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'}document.documentElement.setAttribute('data-theme',t)}catch(e){}})()`
        }} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <link rel="preload" href="/fonts/inter-variable.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/firacode-variable.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="alternate" type="text/markdown" href="/llms.txt" title="Contexto para LLMs" />
      </head>
       <body suppressHydrationWarning>
         <SkipLink />
         <ClientProviders>
           <LanguageProvider>
             {children}
           </LanguageProvider>
         </ClientProviders>
         <Analytics />
       </body>
    </html>
  )
}
