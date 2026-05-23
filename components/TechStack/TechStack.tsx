'use client'

import { useLanguage } from '@/context/LanguageContext'
import styles from './TechStack.module.scss'

const technologies = [
  { name: 'React', icon: '⚛️', category: 'frontend' },
  { name: 'TypeScript', icon: 'TS', category: 'frontend' },
  { name: 'Next.js', icon: 'N', category: 'frontend' },
  { name: 'JavaScript', icon: 'JS', category: 'frontend' },
  { name: 'HTML5', icon: '🌐', category: 'frontend' },
  { name: 'CSS3/SCSS', icon: '🎨', category: 'frontend' },
  { name: 'Tailwind CSS', icon: '💨', category: 'frontend' },
  { name: 'Node.js', icon: '🟢', category: 'backend' },
  { name: 'Git', icon: '📦', category: 'tools' },
  { name: 'Figma', icon: '🎯', category: 'tools' },
  { name: 'Jest', icon: '🧪', category: 'tools' },
  { name: 'Storybook', icon: '📚', category: 'tools' },
]

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
          {technologies.map((tech, index) => (
            <div 
              key={tech.name} 
              className={styles.techCard}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className={styles.icon}>{tech.icon}</span>
              <span className={styles.name}>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
