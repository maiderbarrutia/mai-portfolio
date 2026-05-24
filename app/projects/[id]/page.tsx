'use client'

import { useState, use } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { useLanguage } from '@/context/LanguageContext'
import { getProjectById } from '@/data/projects'
import type { Project } from '@/data/projects'
import styles from './ProjectDetail.module.scss'

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const { t, language } = useLanguage()
  const project = getProjectById(id)
  const [selectedMedia, setSelectedMedia] = useState(0)

  if (!project) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <Link href="/" className={styles.backLink}>
            <ArrowLeft size={20} />
            {t('projects.backToHome')}
          </Link>

          <header className={styles.header}>
            <h1 className={styles.title}>{project.title[language]}</h1>
            <p className={styles.subtitle}>{project.subtitle[language]}</p>
            <p className={styles.description}>{project.description[language]}</p>

            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>

            <div className={styles.actions}>
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
                  {t('projects.demo')}
                  <ExternalLink size={16} />
                </a>
              )}
              {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>
                  <Github size={16} />
                  {t('projects.repository')}
                </a>
              )}
            </div>
          </header>

          {project.media.length > 0 && (
            <section className={styles.gallery}>
              <div className={styles.galleryMain}>
                {project.media[selectedMedia].type === 'video' ? (
                  <video
                    src={project.media[selectedMedia].src}
                    controls
                    className={styles.galleryMedia}
                  />
                ) : (
                  <img
                    src={project.media[selectedMedia].src}
                    alt={project.media[selectedMedia].alt[language]}
                    className={styles.galleryMedia}
                  />
                )}
                {project.media[selectedMedia].caption && (
                  <p className={styles.galleryCaption}>
                    {project.media[selectedMedia].caption![language]}
                  </p>
                )}
              </div>
              {project.media.length > 1 && (
                <div className={styles.galleryThumbs}>
                  {project.media.map((item, index) => (
                    <button
                      key={item.src}
                      className={`${styles.thumbBtn} ${index === selectedMedia ? styles.thumbActive : ''}`}
                      onClick={() => setSelectedMedia(index)}
                      aria-label={item.alt[language]}
                    >
                      <img
                        src={item.src}
                        alt={item.alt[language]}
                        className={styles.thumbImg}
                      />
                    </button>
                  ))}
                </div>
              )}
            </section>
          )}

          <div className={styles.content}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t('projects.challenge')}</h2>
              <p className={styles.sectionText}>{project.challenge[language]}</p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t('projects.uxDecisions')}</h2>
              <p className={styles.sectionText}>{project.uxDecisions[language]}</p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t('projects.architecture')}</h2>
              <p className={styles.sectionText}>{project.architecture[language]}</p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t('projects.aiIntegration')}</h2>
              <p className={styles.sectionText}>{project.aiIntegration[language]}</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
