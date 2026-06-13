'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { useLanguage } from '@/context/LanguageContext'
import { legalContent } from '@/data/legal'
import styles from './legal.module.scss'

function parseBold(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    return part
  })
}

export default function LegalPage() {
  const { language } = useLanguage()
  const content = legalContent[language]

  return (
    <>
      <Header />
      <main id="main-content" className={styles.page}>
        <div className={styles.page__container}>
          <Link href={language === 'en' ? '/en' : '/'} className={styles.page__back}>
            <ArrowLeft size={20} />
            {content.backHome}
          </Link>

          <header className={styles.page__header}>
            <h1 className={styles.page__title}>{content.title}</h1>
            <p className={styles.page__updated}>{content.lastUpdated}</p>
          </header>

          <div className={styles.page__content}>
            {content.sections.map((section) => (
              <section key={section.title} className={styles.section}>
                <h2 className={styles.section__title}>{section.title}</h2>
                <div className={styles.section__body}>
                  {section.content.split('\n\n').map((paragraph, i) => (
                    <p key={i} className={styles.section__paragraph}>
                      {parseBold(paragraph)}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
