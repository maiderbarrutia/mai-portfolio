'use client'

import { useState, useEffect, useRef, type ReactNode } from 'react'
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
    role: { es: 'Fullstack Developer', en: 'Fullstack Developer' },
    company: { es: 'Desarrollos Online', en: 'Desarrollos Online' },
    location: { es: 'Madrid', en: 'Madrid' },
    period: { es: '2025 - Actualidad', en: '2025 - Present' },
    achievements: {
      es: [
        'Para integrar una **tecnología específica** requerida por el cliente, lideré su aprendizaje y despliegue autónomo **asistido por IA** en una semana, reduciendo el tiempo de entrega un **20%** y cumpliendo con el lanzamiento previsto.',
        'Para facilitar la escalabilidad del sistema, refactoricé módulos críticos de código **PHP** logrando acelerar el despliegue de nuevas funcionalidades en un **15%**.',
        'En el rediseño de una plataforma energética para **+100.000 usuarios**, lideré la maquetación **pixel-perfect** con SASS y el despliegue funcional, resolviendo desafíos técnicos para garantizar una interfaz optimizada y una transición sin errores.',
      ],
      en: [
        'To integrate a **specific technology** required by the client, I led its self-directed learning and **AI-assisted** deployment in one week, reducing delivery time by **20%** and meeting the planned launch.',
        'To improve system scalability, I refactored critical **PHP modules**, accelerating new feature deployment by **15%**.',
        'In the redesign of an energy platform for **+100,000 users**, I led **pixel-perfect** layout with SASS and functional deployment, resolving technical challenges to ensure an optimized interface and a seamless transition.',
      ],
    },
    technologies: ['php', 'scss', 'typescript', 'react'],
  },
  {
    role: { es: 'Fullstack Developer', en: 'Fullstack Developer' },
    company: { es: 'Freelance', en: 'Freelance' },
    location: { es: 'Online', en: 'Remote' },
    period: { es: '2023 - 2025', en: '2023 - 2025' },
    achievements: {
      es: [
        'Para lanzar una plataforma robusta y escalable, arquitecturé desde cero la **BBDD MySQL** y la **API REST en Node.js/Express**, mejorando el rendimiento del sistema un **30%** mediante consultas SQL optimizadas e índices.',
        'Para optimizar la experiencia móvil, diseñé en **Figma** y desarrollé componentes en **React** bajo una metodología **mobile first** (CSS Grid/Flexbox), logrando una alta fidelidad visual y una navegación más fluida.',
      ],
      en: [
        'To launch a robust and scalable platform, I architected the **MySQL database** and **REST API in Node.js/Express** from scratch, improving system performance by **30%** through optimized SQL queries and indexes.',
        'To optimize the mobile experience, I designed in **Figma** and developed **React** components under a **mobile-first** methodology (CSS Grid/Flexbox), achieving high visual fidelity and smoother navigation.',
      ],
    },
    technologies: ['mysql', 'nodejs', 'express', 'react', 'figma', 'scss'],
  },
  {
    role: { es: 'Frontend UI Developer', en: 'Frontend UI Developer' },
    company: { es: 'Corus Consulting', en: 'Corus Consulting' },
    location: { es: 'Madrid', en: 'Madrid' },
    period: { es: '2017 - 2023', en: '2017 - 2023' },
    achievements: {
      es: [
        'Ante la caída de tráfico por tiempos de carga elevados en ecosistemas **WordPress**, implementé estrategias de **WPO** como caché, minificación y gestión de imágenes (WebP/Lazy loading), elevando el PageSpeed de **60 a 90** y mejorando la velocidad de carga un **30%**.',
        'Ante incidentes de seguridad que comprometieron la integridad web, lideré la **limpieza y restauración de código** coordinando con sistemas el bloqueo de amenazas, logrando la recuperación y continuidad del servicio **sin pérdida de datos**.',
        'Para facilitar la escalabilidad de la arquitectura frontend, sistematicé el flujo de trabajo mediante la creación de estilos reutilizables con **SASS** bajo metodologías **Scrum/Kanban**, reduciendo los tiempos de entrega en un **20%**.',
        'Para asegurar una experiencia visual impecable en sitios de alto tráfico, desarrollé interfaces **Pixel-Perfect** para clientes referentes en **Salud, Seguros y Media**, logrando el cumplimiento total de estándares corporativos y **accesibilidad**.',
      ],
      en: [
        'Facing traffic drops due to high load times in **WordPress** ecosystems, I implemented **WPO strategies** — caching, minification, and image management (WebP/Lazy loading) — raising PageSpeed from **60 to 90** and improving load speed by **30%**.',
        'After security incidents that compromised website integrity, I led **code cleanup and restoration**, coordinating with systems teams to block threats, achieving service recovery with **zero data loss**.',
        'To enable frontend architecture scalability, I systematized the workflow by creating **reusable SASS styles** under **Scrum/Kanban** methodologies, reducing delivery times by **20%**.',
        'To ensure a flawless visual experience on high-traffic sites, I developed **pixel-perfect interfaces** for leading clients in **Health, Insurance, and Media**, achieving full compliance with corporate standards and **accessibility** requirements.',
      ],
    },
    technologies: ['wordpress', 'scss', 'javascript', 'scrum', 'kanban', 'jira'],
  },
]

const education = [
  {
    es: {
      title: 'Técnico Superior en Desarrollo de Aplicaciones Web (DAW)',
      institution: 'Ilerna',
      period: '2023 - 2025',
    },
    en: {
      title: 'Advanced Vocational Diploma in Web Application Development',
      institution: 'Ilerna',
      period: '2023 - 2025',
    },
  },
  {
    es: {
      title: 'Técnico Superior de Artes Plásticas y Diseño en Gráfica Publicitaria',
      institution: 'Escuela de Arte',
      period: '2016 - 2020',
    },
    en: {
      title: 'Advanced Vocational Diploma in Plastic Arts and Graphic Design',
      institution: 'School of Arts',
      period: '2016 - 2020',
    },
  },
]

const certifications = {
  es: [
    { title: 'Bootcamp TS + React + Vitest (TDD)', institution: 'Lemoncode', hours: '114h' },
    { title: 'Desarrollo Full Stack (Node.js, Angular, TypeScript, APIs REST)', institution: 'Samsung', hours: '350h' },
    { title: 'Desarrollo Oracle SQL-PL/SQL', institution: 'Cas-training', hours: '135h' },
    { title: 'Desarrollo con IA', institution: 'Big School', hours: '6h' },
  ],
  en: [
    { title: 'Bootcamp TS + React + Vitest (TDD)', institution: 'Lemoncode', hours: '114h' },
    { title: 'Full Stack Development (Node.js, Angular, TypeScript, REST APIs)', institution: 'Samsung', hours: '350h' },
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
  const visible = useInView(itemRefs)

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles['experience__container']}>
        <div className={styles['experience__header']}
          ref={useRef<HTMLDivElement>(null)}
        >
          <span className={styles['experience__section-tag']}>{t('experience.tag')}</span>
          <h2 className={styles['experience__title']}>{t('experience.title')}</h2>
          <p className={styles['experience__subtitle']}>{t('experience.subtitle')}</p>
        </div>

        <div className={styles.tabs} role="tablist">
          <button
            role="tab"
            aria-selected={activeTab === 'experience'}
            className={`${styles.tabs__btn} ${activeTab === 'experience' ? styles['tabs__btn--active'] : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            {t('experience.experienceTab')}
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'education'}
            className={`${styles.tabs__btn} ${activeTab === 'education' ? styles['tabs__btn--active'] : ''}`}
            onClick={() => setActiveTab('education')}
          >
            {t('experience.educationTab')}
          </button>
        </div>

        {activeTab === 'experience' && (
          <div className={styles['experience__timeline']} role="tabpanel">
            {experiences.map((exp, index) => {
              const lang = language as Lang
              const isVisible = visible.has(index)

              return (
                <div
                  key={index}
                  ref={itemRefs[index]}
                  className={`${styles['experience__timeline-item']} ${isVisible ? styles['experience__timeline-item--visible'] : ''}`}
                  style={{ transitionDelay: `${index * 0.15}s` }}
                >
                  <div className={styles['experience__timeline-marker']}>
                    <div className={`${styles['experience__dot']} ${isVisible ? styles['experience__dot--pulse'] : ''}`} />
                    {index !== experiences.length - 1 && (
                      <div className={`${styles['experience__line']} ${isVisible ? styles['experience__line--grow'] : ''}`}
                        style={{ transitionDelay: `${index * 0.15 + 0.3}s` }}
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
          <div className={styles['education']} role="tabpanel">
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
                  style={{ animationDelay: `${i * 0.1}s` }}
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
