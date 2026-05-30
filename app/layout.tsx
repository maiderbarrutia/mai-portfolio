import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import ClientProviders from '@/components/ClientProviders'
import { LanguageProvider } from '@/context/LanguageContext'
import '@/styles/globals.scss'

const siteUrl = 'https://maiderbarrutia.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Maider Barrutia | FullStack Developer & UI Architect',
  description: 'Desarrolladora FullStack (Sass, React, TS, Next.js) con experiencias Frontend UI modernas, backend escalable y optimizado con IA. ¡Conoce mi trabajo!',
  applicationName: 'Maider Barrutia',
  verification: {
    google: 'u5RYPfHJK4Dpht8OzUfbzKo1KYyeyIPy01n0BCT-198',
  },
  keywords: [
    'FullStack Developer', 'Frontend Developer', 'Software Engineer', 'UI Architect', 'Web Architect',
    'React', 'TypeScript', 'Next.js', 'Node.js', 'JavaScript', 'Git', 'Vite', 'WordPress',
    'UI Design', 'UX Design', 'Sass', 'Tailwind CSS', 'figma',
    'AI-Driven Development', 'AI Integration', 'Scalable Solutions',
  ],
  authors: [{ name: 'Maider Barrutia' }],
  openGraph: {
    title: 'Maider Barrutia | FullStack Developer & UI Architect',
    description: 'Desarrolladora FullStack (Sass, React, TS, Next.js) con experiencias Frontend UI modernas, backend escalable y optimizado con IA. ¡Conoce mi trabajo!',
    type: 'website',
    siteName: 'Maider Barrutia',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maider Barrutia | FullStack Developer & UI Architect',
    description: 'Desarrolladora FullStack (Sass, React, TS, Next.js) con experiencias Frontend UI modernas, backend escalable y optimizado con IA. ¡Conoce mi trabajo!',
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
    canonical: '/',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Maider Barrutia',
      givenName: 'Maider',
      familyName: 'Barrutia',
      jobTitle: 'FullStack Developer & UI Architect',
      description: 'Desarrolladora FullStack (Sass, React, TS, Next.js) con experiencias Frontend UI modernas, backend escalable y optimizado con IA. ¡Conoce mi trabajo!',
      url: siteUrl,
      image: `${siteUrl}/mai-logo.svg`,
      sameAs: [
        'https://github.com/maiderbarrutia',
        'https://linkedin.com/in/maiderbarrutiaunzueta',
      ],
      knowsAbout: [
        'FullStack Developer', 'Frontend Developer', 'Software Engineer', 'UI Architect', 'Web Architect',
        'React', 'TypeScript', 'Next.js', 'Node.js', 'JavaScript', 'Git', 'Vite', 'WordPress',
        'UI Design', 'UX Design', 'Sass', 'Tailwind CSS', 'figma',
        'AI-Driven Development', 'AI Integration', 'Scalable Solutions',
      ],
      alumniOf: [
        {
          '@type': 'EducationalOrganization',
          name: 'Ilerna Online',
          description: 'Técnico Superior en Desarrollo de Aplicaciones Web (DAW)',
        },
        {
          '@type': 'EducationalOrganization',
          name: 'Instituto Ibarrekolanda de Bilbao',
          description: 'Técnico Superior de Artes Plásticas y Diseño en Gráfica Publicitaria',
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
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Maider Barrutia',
      alternateName: ['Maider Barrutia', 'Maider Barrutia Portfolio'],
      description: 'Desarrolladora FullStack (Sass, React, TS, Next.js) con experiencias Frontend UI modernas, backend escalable y optimizado con IA. ¡Conoce mi trabajo!',
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
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'}document.documentElement.setAttribute('data-theme',t)}catch(e){}})()`
        }} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
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
