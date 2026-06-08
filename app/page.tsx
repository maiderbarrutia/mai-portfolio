import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import Projects from '@/components/Projects/Projects'
import TechStack from '@/components/TechStack/TechStack'
import Experience from '@/components/Experience/Experience'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import { SITE_URL } from '@/lib/constants'

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies()
  const lang = cookieStore.get('portfolio-language')?.value === 'en' ? 'en' : 'es'

  const title = lang === 'en'
    ? 'Maider Barrutia | FullStack Developer & UI Architect'
    : 'Maider Barrutia | FullStack Developer & UI Architect'
  const description = lang === 'en'
    ? 'FullStack developer portfolio featuring React, TS, Next.js, and Sass. Crafting modern UI, scalable backends, and AI-optimized solutions.'
    : 'Portfolio de desarrolladora FullStack con React, TS, Next.js y Sass. Creación de interfaces UI modernas, backend escalable y soluciones optimizadas con IA.'

  return {
    title,
    description,
    alternates: {
      canonical: SITE_URL,
      languages: {
        es: SITE_URL,
        en: SITE_URL,
      },
    },
    openGraph: {
      title,
      description,
      type: 'website',
      siteName: 'Maider Barrutia',
      locale: lang === 'en' ? 'en_US' : 'es_ES',
      alternateLocale: lang === 'en' ? 'es_ES' : 'en_US',
      url: SITE_URL,
      images: [
        {
          url: '/og-image.svg',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.svg'],
    },
  }
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
