'use client'

import { useState, useEffect, useRef, type ReactNode } from 'react'
import { Download } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import styles from './Experience.module.scss'

function parseBold(text: string): ReactNode {
  const parts = text.split(/(\*\*.*?\*\*)/)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    return part
  })
}

type Lang = 'es' | 'en'

const experiences = [
  {
    role: { es: 'FullStack Developer', en: 'FullStack Developer' },
    company: { es: 'Desarrollos Online', en: 'Desarrollos Online' },
    location: { es: 'Madrid', en: 'Madrid' },
    period: { es: '2025 - Actualidad', en: '2025 - Present' },
    achievements: {
      es: [
        'Responsable del desarrollo FullStack de aplicaciones web corporativas, liderando la adopción de herramientas de **IA** para optimizar tiempos de desarrollo, la refactorización de código crítico y la maquetación avanzada de plataformas de alta concurrencia.',
      ],
      en: [
        'Responsible for FullStack development of corporate web applications, leading the adoption of **AI** tools to optimize development times, critical code refactoring, and advanced layout of high-concurrency platforms.',
      ],
    },
    technologies: ['Sass', 'JavaScript', 'Php', 'MySql', 'Wordpress', 'Figma', 'Copilot'],
  },
  {
    role: { es: 'FullStack Developer', en: 'FullStack Developer' },
    company: { es: 'Freelance', en: 'Freelance' },
    location: { es: 'Online', en: 'Remote' },
    period: { es: '2023 - 2025', en: '2023 - 2025' },
    achievements: {
      es: [
        'Gestión integral de proyectos de desarrollo a medida para clientes independientes, encargándome desde la arquitectura de bases de datos y creación de **APIs** robustas en el backend, hasta el diseño **UI/UX** y desarrollo de interfaces optimizadas para dispositivos móviles.',
      ],
      en: [
        'End-to-end management of custom development projects for independent clients, handling everything from database architecture and robust **API** creation on the backend, to **UI/UX** design and development of mobile-optimized interfaces.',
      ],
    },
    technologies: ['React', 'Figma', 'Sass', 'MySql', 'Nodejs', 'Express', 'Copilot', 'ChatGPT'],
  },
  {
    role: { es: 'Frontend UI Developer', en: 'Frontend UI Developer' },
    company: { es: 'Corus Consulting', en: 'Corus Consulting' },
    location: { es: 'Madrid', en: 'Madrid' },
    period: { es: '2017 - 2023', en: '2017 - 2023' },
    achievements: {
      es: [
        'Especialista en desarrollo de interfaces de usuario para grandes cuentas (**Salud, Seguros y Media**), enfocada en la optimización extrema del rendimiento web (**WPO**), la resolución de incidentes críticos de seguridad y la estructuración de flujos de trabajo escalables bajo metodologías ágiles.',
      ],
      en: [
        'Specialist in user interface development for major accounts (**Health, Insurance, and Media**), focused on extreme web performance optimization (**WPO**), resolution of critical security incidents, and structuring scalable workflows under agile methodologies.',
      ],
    },
    technologies: ['Wordpress', 'Sass', 'JQuery', 'Scrum', 'Kanban'],
  },
]

const education = [
  {
    es: {
      title: 'Técnico Superior en Desarrollo de Aplicaciones Web (DAW)',
      institution: 'Ilerna (Online)',
      period: '2023 - 2025',
    },
    en: {
      title: 'Advanced Vocational Diploma in Web Application Development',
      institution: 'Ilerna (Online)',
      period: '2023 - 2025',
    },
  },
  {
    es: {
      title: 'Confección y Publicación de Páginas Web',
      institution: 'Centro San Luis (Bilbao)',
      period: '2014 - 2015',
    },
    en: {
      title: 'Web Page Design and Publishing',
      institution: 'Centro San Luis (Bilbao)',
      period: '2014 - 2015',
    },
  },
  {
    es: {
      title: 'Técnico Superior de Artes Plásticas y Diseño en Gráfica Publicitaria',
      institution: 'Instituto Ibarrekolanda (Bilbao)',
      period: '2009 - 2013',
    },
    en: {
      title: 'Advanced Vocational Diploma in Plastic Arts and Graphic Design',
      institution: 'Instituto Ibarrekolanda (Bilbao)',
      period: '2009 - 2013',
    },
  },
]

const certifications = {
  es: [
    { title: 'Bootcamp TS + React + Vitest (TDD)', institution: 'Lemoncode', hours: '114h' },
    { title: 'Desarrollo FullStack (Node.js, Angular, TypeScript, APIs REST)', institution: 'Samsung', hours: '350h' },
    { title: 'Desarrollo Oracle SQL-PL/SQL', institution: 'Cas-training', hours: '135h' },
    { title: 'Desarrollo con IA', institution: 'Big School', hours: '6h' },
  ],
  en: [
    { title: 'Bootcamp TS + React + Vitest (TDD)', institution: 'Lemoncode', hours: '114h' },
    { title: 'FullStack Development (Node.js, Angular, TypeScript, REST APIs)', institution: 'Samsung', hours: '350h' },
    { title: 'Oracle SQL-PL/SQL Development', institution: 'Cas-training', hours: '135h' },
    { title: 'AI-Assisted Development', institution: 'Big School', hours: '6h' },
  ],
}

function useInView(refs: React.RefObject<Element | null>[]) {
  const [visible, setVisible] = useState<Set<number>>(new Set())

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    refs.forEach((ref, i) => {
      if (!ref.current) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(prev => new Set(prev).add(i))
          }
        },
        { threshold: 0.15 }
      )
      observer.observe(ref.current)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [refs])

  return visible
}

export default function Experience() {
  const { t, language } = useLanguage()
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience')

  const itemRefs = experiences.map(() => useRef<HTMLDivElement>(null))
  const headerRef = useRef<HTMLDivElement>(null)
  const visible = useInView(itemRefs)

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles['experience__container']}>
        <div className={styles['experience__header']}
          ref={headerRef}
        >
          <span className={styles['experience__section-tag']}>{t('experience.tag')}</span>
          <h2 className={styles['experience__title']}>{t('experience.title')}</h2>
          <p className={styles['experience__subtitle']}>{t('experience.subtitle')}</p>
          <a href={language === 'en' ? '/cv-maider-barrutia-en.pdf' : '/cv-maider-barrutia.pdf'} target="_blank" rel="noopener noreferrer" className={styles['experience__cv-btn']}>
            <Download size={16} />
            {t('experience.downloadCV')}
          </a>
        </div>

        <div className={styles.tabs} role="tablist" aria-label="Experience tabs">
          <button
            id="tab-experience"
            role="tab"
            aria-controls="panel-experience"
            aria-selected={activeTab === 'experience'}
            className={`${styles.tabs__btn} ${activeTab === 'experience' ? styles['tabs__btn--active'] : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            {t('experience.experienceTab')}
          </button>
          <button
            id="tab-education"
            role="tab"
            aria-controls="panel-education"
            aria-selected={activeTab === 'education'}
            className={`${styles.tabs__btn} ${activeTab === 'education' ? styles['tabs__btn--active'] : ''}`}
            onClick={() => setActiveTab('education')}
          >
            {t('experience.educationTab')}
          </button>
        </div>

        {activeTab === 'experience' && (
          <div id="panel-experience" className={styles['experience__timeline']} role="tabpanel" aria-labelledby="tab-experience">
            {experiences.map((exp, index) => {
              const lang = language as Lang
              const isVisible = visible.has(index)

              return (
                <div
                  key={index}
                  ref={itemRefs[index]}
                  className={`${styles['experience__timeline-item']} ${isVisible ? styles['experience__timeline-item--visible'] : ''}`}
                  style={{ '--item-delay': `${index * 0.15}s` } as React.CSSProperties}
                >
                  <div className={styles['experience__timeline-marker']}>
                    <div className={`${styles['experience__dot']} ${isVisible ? styles['experience__dot--pulse'] : ''}`} />
                    {index !== experiences.length - 1 && (
                      <div className={`${styles['experience__line']} ${isVisible ? styles['experience__line--grow'] : ''}`}
                        style={{ '--line-delay': `${index * 0.15 + 0.3}s` } as React.CSSProperties}
                      />
                    )}
                  </div>
                  <div className={styles['experience__content']}>
                    <div className={styles['experience__period']}>
                      {exp.period[lang]}{exp.location[lang] ? ` | ${exp.location[lang]}` : ''}
                    </div>
                    <h3 className={styles['experience__role']}>{exp.role[lang]}</h3>
                    <h4 className={styles['experience__company']}>{exp.company[lang]}</h4>
                    <ul className={styles['experience__achievements']}>
                      {exp.achievements[lang].map((a, i) => (
                        <li key={i} className={styles['experience__achievement']}>{parseBold(a)}</li>
                      ))}
                    </ul>
                    <div className={styles['experience__technologies']}>
                      {exp.technologies.map((tech) => (
                        <span key={tech} className={styles['experience__tech']}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {activeTab === 'education' && (
          <div id="panel-education" className={styles['education']} role="tabpanel" aria-labelledby="tab-education">
            {education.map((edu, i) => (
              <div key={i} className={styles['education__card']}>
                <h3 className={styles['education__title']}>{edu[language as Lang].title}</h3>
                <p className={styles['education__meta']}>
                  {edu[language as Lang].institution} &middot; {edu[language as Lang].period}
                </p>
              </div>
            ))}

            <h3 className={styles['education__subtitle']}>{t('experience.certifications')}</h3>
            <div className={styles['education__grid']}>
              {certifications[language as Lang].map((cert, i) => (
                <div key={i} className={styles['education__cert']}
                  style={{ '--cert-delay': `${i * 0.1}s` } as React.CSSProperties}
                >
                  <div className={styles['education__cert-info']}>
                    <h4 className={styles['education__cert-title']}>{cert.title}</h4>
                    <p className={styles['education__cert-meta']}>{cert.institution}</p>
                  </div>
                  <span className={styles['education__cert-hours']}>{cert.hours}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
