'use client'

import { useLanguage } from '@/context/LanguageContext'
import { technologiesRegistry } from '@/data/technologies'
import TechnologyIcon from '../ui/technologyIcon'
import styles from './TechStack.module.scss'

export default function TechStack() {
  const { t } = useLanguage()
  

  return (
    <section id="tech" className={styles.techStack}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionTag}>{t('tech.tag')}</span>
          <h2 className={styles.title}>{t('tech.title')}</h2>
          <p className={styles.subtitle}>{t('tech.subtitle')}</p>
        </div>

        <div className={styles.grid}>
          {technologiesRegistry.map((tech, index) => (
            <div 
              key={tech.techKey} 
              className={styles.techCard}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className={styles.icon}>
                <TechnologyIcon techKey={tech.techKey} className="w-full h-full" />
              </span>
              <span className={styles.name}>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}