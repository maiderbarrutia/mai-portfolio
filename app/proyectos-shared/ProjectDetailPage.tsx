'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { getProjectById } from '@/data/projects';
import styles from './ProjectDetail.module.scss';

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { t, language } = useLanguage();
  const project = getProjectById(id);
  const [selectedMedia, setSelectedMedia] = useState(0);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className={styles['project-detail']}>
        <div className={styles['project-detail__container']}>
          <Link href={language === 'es' ? '/proyectos' : '/projects'} className={styles['project-detail__back']}>
            <ArrowLeft size={20} />
            {t('projects.backToHome')}
          </Link>

          <header className={styles['project-detail__header']}>
            <h1 className={styles['project-detail__title']}>{project.title[language]}</h1>
            <p className={styles['project-detail__subtitle']}>{project.subtitle[language]}</p>
            <p className={styles['project-detail__description']}>{project.description[language]}</p>

            <div className={styles['project-detail__tags']}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles['project-detail__tag']}>{tag}</span>
              ))}
            </div>

            <div className={styles['project-detail__actions']}>
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className={`${styles['project-detail__btn']} ${styles['project-detail__btn--primary']}`}>
                  {t('projects.demo')}
                  <ExternalLink size={16} />
                </a>
              )}
              {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={`${styles['project-detail__btn']} ${styles['project-detail__btn--secondary']}`}>
                  <Github size={16} />
                  {t('projects.repository')}
                </a>
              )}
            </div>
          </header>

          {project.media.length > 0 && (
            <section className={styles['project-detail__gallery']}>
              <div className={styles['project-detail__gallery-main']}>
                {project.media[selectedMedia].type === 'video' ? (
                  <video
                    src={project.media[selectedMedia].src}
                    controls
                    className={styles['project-detail__gallery-media']}
                  />
                ) : (
                  <img
                    src={project.media[selectedMedia].src}
                    alt={project.media[selectedMedia].alt[language]}
                    className={styles['project-detail__gallery-media']}
                  />
                )}
                {project.media[selectedMedia].caption && (
                  <p className={styles['project-detail__gallery-caption']}>
                    {project.media[selectedMedia].caption![language]}
                  </p>
                )}
              </div>
              {project.media.length > 1 && (
                <div className={styles['project-detail__gallery-thumbs']}>
                  {project.media.map((item, index) => (
                    <button
                      key={item.src}
                      className={`${styles['project-detail__thumb']} ${index === selectedMedia ? styles['project-detail__thumb--active'] : ''}`}
                      onClick={() => setSelectedMedia(index)}
                      aria-label={item.alt[language]}
                    >
                      <img src={item.src} alt={item.alt[language]} />
                    </button>
                  ))}
                </div>
              )}
            </section>
          )}

          <div className={styles['project-detail__sections']}>
            <section className={styles['project-detail__section']}>
              <h2 className={styles['project-detail__section-title']}>{t('projects.challenge')}</h2>
              <p className={styles['project-detail__section-text']}>{project.challenge[language]}</p>
            </section>

            <section className={styles['project-detail__section']}>
              <h2 className={styles['project-detail__section-title']}>{t('projects.uxDecisions')}</h2>
              <p className={styles['project-detail__section-text']}>{project.uxDecisions[language]}</p>
            </section>

            <section className={styles['project-detail__section']}>
              <h2 className={styles['project-detail__section-title']}>{t('projects.architecture')}</h2>
              <p className={styles['project-detail__section-text']}>{project.architecture[language]}</p>
            </section>

            <section className={styles['project-detail__section']}>
              <h2 className={styles['project-detail__section-title']}>{t('projects.aiIntegration')}</h2>
              <p className={styles['project-detail__section-text']}>{project.aiIntegration[language]}</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
