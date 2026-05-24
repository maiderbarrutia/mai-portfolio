'use client'

import { useLanguage } from '@/context/LanguageContext'
import styles from './Experience.module.scss'

const experiences = [
  {
    id: 1,
    company: 'Tech Company',
    role: 'Senior Frontend Developer',
    period: '2022 - Present',
    description: 'Leading frontend development for multiple projects using React, TypeScript, and Next.js.',
    technologies: ['React', 'TypeScript', 'Next.js', 'GraphQL'],
  },
  {
    id: 2,
    company: 'Digital Agency',
    role: 'Frontend Developer',
    period: '2020 - 2022',
    description: 'Developed responsive web applications and collaborated with design teams.',
    technologies: ['React', 'JavaScript', 'SCSS', 'Node.js'],
  },
  {
    id: 3,
    company: 'Startup',
    role: 'Junior Developer',
    period: '2018 - 2020',
    description: 'Started my journey in web development, learning best practices and modern technologies.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Vue.js'],
  },
]

export default function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles['experience__container']}>
        <div className={styles['experience__header']}>
          <span className={styles['experience__section-tag']}>{t('experience.tag')}</span>
          <h2 className={styles['experience__title']}>{t('experience.title')}</h2>
          <p className={styles['experience__subtitle']}>{t('experience.subtitle')}</p>
        </div>

        <div className={styles['experience__timeline']}>
          {experiences.map((exp, index) => (
            <div key={exp.id} className={styles['experience__timeline-item']}>
              <div className={styles['experience__timeline-marker']}>
                <div className={styles['experience__dot']} />
                {index !== experiences.length - 1 && <div className={styles['experience__line']} />}
              </div>
              <div className={styles['experience__content']}>
                <div className={styles['experience__period']}>{exp.period}</div>
                <h3 className={styles['experience__role']}>{exp.role}</h3>
                <h4 className={styles['experience__company']}>{exp.company}</h4>
                <p className={styles['experience__description']}>{exp.description}</p>
                <div className={styles['experience__technologies']}>
                  {exp.technologies.map((tech) => (
                    <span key={tech} className={styles['experience__tech']}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
