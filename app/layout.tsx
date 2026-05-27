import type { Metadata } from 'next'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import ClientProviders from '@/components/ClientProviders'
import { LanguageProvider } from '@/context/LanguageContext'
import '@/styles/globals.scss'

const siteUrl = 'https://maiderbarrutia.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Maider Barrutia | Fullstack Developer & UI Architect',
  description: 'Desarrolladora FullStack especializada en SASS, React.js, TypeScript y arquitecturas escalables. Optimizando la lógica backend y el diseño UI con flujos de trabajo de IA para crear aplicaciones de alto rendimiento.',
  verification: {
    google: 'u5RYPfHJK4Dpht8OzUfbzKo1KYyeyIPy01n0BCT-198', 
  },
  keywords : [
  // Roles y Perfil Profesional
    'FullStack Developer', 
    'Frontend Developer', 
    'Software Engineer', 
    'UI Architect', 
    'Web Architect',

    // Tech Stack
    'React', 
    'TypeScript', 
    'Next.js', 
    'Node.js', 
    'JavaScript',
    'Git', 
    'Vite', 
    'WordPress',

    // Diseñoy Estilos
    'UI Design', 
    'UX Design', 
    'Sass', 
    'Tailwind CSS',
    'figma',

    // Tendencias e Innovación
    'AI-Driven Development', 
    'AI Integration', 
    'Scalable Solutions'
  ],
  authors: [{ name: 'Maider Barrutia' }],
  openGraph: {
    title: 'Maider Barrutia | Fullstack Developer & UI Architect',
    description: 'Desarrolladora FullStack especializada en SASS, React.js, TypeScript y arquitecturas escalables. Optimizando la lógica backend y el diseño UI con flujos de trabajo de IA para crear aplicaciones de alto rendimiento.',
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
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Maider Barrutia',
      givenName: 'Maider',
      familyName: 'Barrutia',
      jobTitle: 'Fullstack Developer & UI Architect',
      description: 'Desarrolladora FullStack especializada en SASS, React.js, TypeScript y arquitecturas escalables. Optimizando la lógica backend y el diseño UI con flujos de trabajo de IA para crear aplicaciones de alto rendimiento.',
      url: siteUrl,
      image: `${siteUrl}/mai-logo.svg`,
      sameAs: [
        'https://github.com/maiderbarrutia',
        'https://linkedin.com/in/maiderbarrutiaunzueta',
      ],
      
      knowsAbout: [
        // Roles y Perfil Profesional
        'FullStack Developer', 
        'Frontend Developer', 
        'Software Engineer', 
        'UI Architect', 
        'Web Architect',

        // Tech Stack
        'React', 
        'TypeScript', 
        'Next.js', 
        'Node.js', 
        'JavaScript',
        'Git', 
        'Vite', 
        'WordPress',

        // Diseñoy Estilos
        'UI Design', 
        'UX Design', 
        'Sass', 
        'Tailwind CSS',
        'figma',

        // Tendencias e Innovación
        'AI-Driven Development', 
        'AI Integration', 
        'Scalable Solutions'
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
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Spain',
        },
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Maider Barrutia | Fullstack Developer & UI Architect',
      description: 'Portfolio profesional de Maider Barrutia — desarrolladora FullStack especializada en React, TypeScript, Next.js y diseño UI.',
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
            {process.env.NODE_ENV === 'production' && <Analytics />}
          </LanguageProvider>
        </ClientProviders>
      </body>
    </html>
  )
}
