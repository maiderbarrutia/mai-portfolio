import type { Metadata } from 'next'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import Projects from '@/components/Projects/Projects'
import TechStack from '@/components/TechStack/TechStack'
import Experience from '@/components/Experience/Experience'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'

const siteUrl = 'https://maiderbarrutia.vercel.app'

export const metadata: Metadata = {
  alternates: {
    canonical: siteUrl,
    languages: {
      es: siteUrl,
      en: siteUrl,
    },
  },
  openGraph: {
    locale: 'es_ES',
    alternateLocale: 'en_US',
  },
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
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
