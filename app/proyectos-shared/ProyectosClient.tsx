'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { useLanguage } from '@/context/LanguageContext'
import styles from './Proyectos.module.scss'

interface CategoryGroup {
  key: string
  label: { es: string; en: string }
  items: {
    id: string
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
      <div className={styles.page}>
        <div className={styles.page__container}>
          <Link href="/" className={styles.page__back}>
            <ArrowLeft size={20} />
            {t('projects.backToHome')}
          </Link>

          <header className={styles.page__header}>
            <h1 className={styles.page__title}>{t('projects.allTitle')}</h1>
            <p className={styles.page__subtitle}>{t('projects.allSubtitle')}</p>
          </header>

          <div className={styles.tabs}>
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={`${styles.tabs__btn} ${activeTab === cat.key ? styles['tabs__btn--active'] : ''}`}
                onClick={() => setActiveTab(cat.key)}
              >
                {cat.label[language]}
              </button>
            ))}
          </div>

          {activeCategory && (
            <section className={styles.category}>
              <div className={styles.category__grid}>
                {activeCategory.items.map((project) => (
                  <Link
                    key={project.id}
                    href={`${language === 'es' ? '/proyectos' : '/projects'}/${project.id}`}
                    className={styles.card}
                  >
                    <div className={styles.card__image}>
                      <img
                        src={project.image}
                        alt={project.title[language]}
                        loading="lazy"
                      />
                    </div>
                    <div className={styles.card__content}>
                      <h3 className={styles.card__title}>{project.title[language]}</h3>
                      <p className={styles.card__subtitle}>{project.subtitle[language]}</p>
                      <div className={styles.card__tags}>
                        {project.tags.slice(0, 4).map((tag) => (
                          <span key={tag} className={styles.card__tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}
