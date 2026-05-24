'use client'

import { useLanguage } from '@/context/LanguageContext'
import { technologiesRegistry } from '@/data/technologies'
import TechnologyIcon from '../ui/technologyIcon'
import styles from './TechStack.module.scss'

export default function TechStack() {
  const { t } = useLanguage()

  return (
    <section id="tech" className={styles['tech-stack']}>
      <div className={styles['tech-stack__container']}>
        <div className={styles['tech-stack__header']}>
          <span className={styles['tech-stack__section-tag']}>{t('tech.tag')}</span>
          <h2 className={styles['tech-stack__title']}>{t('tech.title')}</h2>
          <p className={styles['tech-stack__subtitle']}>{t('tech.subtitle')}</p>
        </div>

        <div className={styles['tech-stack__grid']}>
          {technologiesRegistry.map((tech, index) => (
            <div
              key={tech.techKey}
              className={styles['tech-stack__tech-card']}
              style={{ animationDelay: `${index * 0.05}s` }}
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
