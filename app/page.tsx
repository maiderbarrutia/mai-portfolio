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
  title: 'Maider Barrutia | Frontend developer & UI Specialist',
  description: 'Portfolio web enfocado en interfaz y maquetación avanzada. SASS, React, Node.js e IA para crear productos rápidos (WPO), accesibles y pixel-perfect.',
  alternates: {
    canonical: SITE_URL,
    languages: {
      es: SITE_URL,
      en: `${SITE_URL}/en`,
    },
  },
  openGraph: {
    title: 'Maider Barrutia | Frontend developer & UI Specialist',
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
        alt: 'Maider Barrutia | Frontend Developer & UI Specialist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maider Barrutia | Frontend Developer & UI Specialist',
    description: 'Portfolio web enfocado en interfaz y maquetación avanzada. SASS, React, Node.js e IA para crear productos rápidos (WPO), accesibles y pixel-perfect.',
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
