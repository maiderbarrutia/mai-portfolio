'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { technologiesRegistry, type TechnologyCategory } from '@/data/technologies'
import TechnologyIcon from '../ui/technologyIcon'
import styles from './TechStack.module.scss'

const categoryOrder: TechnologyCategory[] = ['frontend', 'backend', 'design', 'tools', 'ai']

export default function TechStack() {
  const { t, language } = useLanguage()
  const [activeTab, setActiveTab] = useState<TechnologyCategory>('frontend')

  const filtered = technologiesRegistry.filter(tech => tech.category === activeTab)

  const tabLabel = (cat: TechnologyCategory): string => {
    const key = `techStack.${cat}` as const
    return t(key)
  }

  return (
    <section id="tech" className={styles['tech-stack']}>
      <div className={styles['tech-stack__container']}>
        <div className={styles['tech-stack__header']}>
          <span className={styles['tech-stack__section-tag']}>{t('tech.tag')}</span>
          <h2 className={styles['tech-stack__title']}>{t('tech.title')}</h2>
          <p className={styles['tech-stack__subtitle']}>{t('tech.subtitle')}</p>
        </div>

        <div className={styles.tabs} role="tablist" aria-label={t('tech.title')}>
          {categoryOrder.map(cat => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeTab === cat}
              className={`${styles.tabs__btn} ${activeTab === cat ? styles['tabs__btn--active'] : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {tabLabel(cat)}
            </button>
          ))}
        </div>

        <div
          key={activeTab}
          className={styles['tech-stack__grid']}
          role="tabpanel"
          aria-label={tabLabel(activeTab)}
        >
          {filtered.map((tech, index) => (
            <div
              key={tech.techKey}
              className={styles['tech-stack__tech-card']}
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              <span className={styles['tech-stack__icon']}>
                <TechnologyIcon techKey={tech.techKey} className="w-full h-full" />
              </span>
              <span className={styles['tech-stack__name']}>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
