import type { Metadata } from 'next'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import Projects from '@/components/Projects/Projects'
import TechStack from '@/components/TechStack/TechStack'
import Experience from '@/components/Experience/Experience'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  alternates: {
    canonical: SITE_URL,
    languages: {
      es: SITE_URL,
      en: SITE_URL,
    },
  },
  openGraph: {
    title: 'Maider Barrutia | FullStack Developer & UI Architect',
    description: 'Desarrolladora FullStack (Sass, React, TS, Next.js) con experiencias Frontend UI modernas, backend escalable y optimizado con IA.',
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
        alt: 'Maider Barrutia | FullStack Developer & UI Architect',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maider Barrutia | FullStack Developer & UI Architect',
    description: 'Desarrolladora FullStack (Sass, React, TS, Next.js) con experiencias Frontend UI modernas, backend escalable y optimizado con IA.',
    images: ['/og-image.svg'],
  },
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Projects />
        <TechStack />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
