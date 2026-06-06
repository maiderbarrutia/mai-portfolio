'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { useLanguage } from '@/context/LanguageContext'
import styles from './Proyectos.module.scss'

interface CategoryGroup {
  key: string
  label: { es: string; en: string }
  items: {
    id: string
    slug: {
      es: string
      en: string
    }
    title: { es: string; en: string }
    subtitle: { es: string; en: string }
    image: string
    tags: string[]
  }[]
}

interface Props {
  categories: CategoryGroup[]
}

export function ProyectosClient({ categories }: Props) {
  const { t, language } = useLanguage()
  const [activeTab, setActiveTab] = useState(categories[0]?.key ?? '')

  const activeCategory = categories.find(c => c.key === activeTab)

  return (
    <>
      <Header />
      <main id="main-content" className={styles.page}>
        <div className={styles.page__container}>
          <Link href="/" className={styles.page__back}>
            <ArrowLeft size={20} />
            {t('projects.backToHome')}
          </Link>

          <header className={styles.page__header}>
            <h1 className={styles.page__title}>{t('projects.allTitle')}</h1>
            <p className={styles.page__subtitle}>{t('projects.allSubtitle')}</p>
          </header>

          <div className={styles.tabs} role="tablist" aria-label="Project categories">
            {categories.map((cat) => (
              <button
                key={cat.key}
                id={`tab-${cat.key}`}
                role="tab"
                aria-controls={`panel-${cat.key}`}
                aria-selected={activeTab === cat.key}
                className={`${styles.tabs__btn} ${activeTab === cat.key ? styles['tabs__btn--active'] : ''}`}
                onClick={() => setActiveTab(cat.key)}
              >
                {cat.label[language]}
              </button>
            ))}
          </div>

          {activeCategory && (
            <section id={`panel-${activeCategory.key}`} className={styles.category} role="tabpanel" aria-labelledby={`tab-${activeCategory.key}`}>
              <div className={styles.category__grid}>
                {activeCategory.items.map((project, index) => (
                  <Link
                    key={project.id}
                    href={`${language === 'es' ? '/proyectos' : '/projects'}/${project.slug[language]}`}
                    className={styles.card}
                    aria-label={project.title[language]}
                  >
                    <div className={styles.card__image}>
                      <div className={styles['card__image-wrapper']}>
                        <Image
                          src={project.image}
                          alt={project.title[language]}
                          fill
                          priority={index === 0}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </div>
                    <div className={styles.card__content}>
                      <h2 className={styles.card__title}>{project.title[language]}</h2>
                      <p className={styles.card__subtitle}>{project.subtitle[language]}</p>
                      <div className={styles.card__tags}>
                        {project.tags.slice(0, 4).map((tag) => (
                          <span key={tag} className={styles.card__tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className={styles.card__link}>
                        {t('projects.viewProject')}
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
