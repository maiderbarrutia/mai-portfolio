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
  title: 'Maider Barrutia | FullStack Developer & UI Specialist',
  description: 'Web portfolio focused on UI and advanced layout. SASS, React, Node.js and AI to create fast (WPO), accessible and pixel-perfect products.',
  alternates: {
    canonical: `${SITE_URL}/en`,
    languages: {
      es: SITE_URL,
      en: `${SITE_URL}/en`,
    },
  },
  openGraph: {
    title: 'Maider Barrutia | FullStack Developer & UI Specialist',
    description: 'Web portfolio focused on UI and advanced layout. SASS, React, Node.js and AI to create fast (WPO), accessible and pixel-perfect products.',
    type: 'website',
    siteName: 'Maider Barrutia',
    locale: 'en_US',
    alternateLocale: 'es_ES',
    url: `${SITE_URL}/en`,
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
    description: 'Web portfolio focused on UI and advanced layout. SASS, React, Node.js and AI to create fast (WPO), accessible and pixel-perfect products.',
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
