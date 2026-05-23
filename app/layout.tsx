import type { Metadata } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/context/LanguageContext'
import { ThemeProvider } from '@/context/ThemeContext'
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

export const metadata = {
  title: 'Maider Barrutia | FullStack Engineer & UX Architect',
  description: 'Desarrolladora FullStack especializada en React.js, TypeScript y arquitecturas escalables. Optimizando la lógica backend y el diseño UX con flujos de trabajo de IA para crear aplicaciones de alto rendimiento.',
  keywords: [
    'Maider Barrutia', 
    'FullStack Engineer', 
    'Frontend Engineer',
    'UX Architect', 
    'React.js Developer', 
    'Next.js',
    'TypeScript expert', 
    'SASS modules',
    'Ingeniera FullStack', 
    'AI-driven development', 
    'Web performance optimization', 
    'Node.js backend', 
    'PostgreSQL'
  ],
  authors: [{ name: 'Maider Barrutia', url: 'https://github.com/maiderbarrutia' }],
  creator: 'Maider Barrutia',
  
  // OpenGraph optimizado para que cuando publiques tu web en LinkedIn se vea un resumen premium
  openGraph: {
    title: 'Maider Barrutia | FullStack Engineer & UX Architect',
    description: 'Construyo aplicaciones web robustas y escalables con un enfoque milimétrico en la experiencia de usuario y optimización de rendimiento.',
    url: 'https://maiderbarrutia.github.io/',
    siteName: 'Maider Barrutia Portfolio',
    images: [
      {
        url: '/og-image.png', // Un mockup o captura premium de tu web (1200x630px) que la IA o humanos verán en redes
        width: 1200,
        height: 630,
        alt: 'Maider Barrutia - FullStack Engineer Portfolio',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },

  // Etiquetas específicas para mejorar la visibilidad en Twitter/X y herramientas de scraping de IA
  twitter: {
    card: 'summary_large_image',
    title: 'Maider Barrutia | FullStack Engineer & UX Architect',
    description: 'Ingeniería FullStack y Diseño de Experiencias optimizadas con IA.',
    images: ['/og-image.png'],
  },

  // Instrucción explícita para indexadores de IA y buscadores habituales
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }
    ],
  },
};

// export const metadata: Metadata = {
//   title: 'Maider Barrutia | FullStack Developer',
//   description: 'Portfolio de Maider Barrutia - Desarrolladora FullStack especializada en React, TypeScript y experiencias web modernas',
//   keywords: ['FullStack Developer', 'Frontend', 'React', 'TypeScript', 'Next.js', 'Web Development'],
//   authors: [{ name: 'Maider Barrutia' }],
//   openGraph: {
//     title: 'Maider Barrutia | FullStack Developer',
//     description: 'Desarrolladora FullStack especializada en crear experiencias web excepcionales',
//     type: 'website',
//   },
//   icons: {
//     icon: [
//       {
//         url: '/icon.svg',
//         media: '(prefers-color-scheme: light)',
//       },
//       {
//         url: '/icon.svg',
//         media: '(prefers-color-scheme: dark)',
//       },
//       {
//         url: '/icon.svg',
//         type: 'image/svg+xml',
//       },
//     ],
//     apple: '/icon.png',
//   },
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${firaCode.variable}`}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
            {process.env.NODE_ENV === 'production' && <Analytics />}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
