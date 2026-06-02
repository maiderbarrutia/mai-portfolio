'use client';

import { useState, use, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { getProjectById } from '@/data/projects';
import styles from './ProjectDetail.module.scss';

function htmlContent(html: string) {
  return { __html: html };
}

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { t, language } = useLanguage();
  const project = getProjectById(id);
  const [selectedMedia, setSelectedMedia] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const goNext = useCallback(() => {
    if (lightboxIndex === null || !project) return;
    setLightboxIndex((lightboxIndex + 1) % project.media.length);
  }, [lightboxIndex, project]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null || !project) return;
    setLightboxIndex((lightboxIndex - 1 + project.media.length) % project.media.length);
  }, [lightboxIndex, project]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, goNext, goPrev]);

  if (!project) {
    notFound();
  }

  const hasContent = (text: string) => {
    const trimmed = text?.trim();
    if (!trimmed) return false;
    const noPatterns = ['sin integración de ia', 'no ai integration', 'sin integración'];
    return !noPatterns.some(p => trimmed.toLowerCase().startsWith(p));
  };

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
            <h1 className={styles['project-detail__title']} dangerouslySetInnerHTML={htmlContent(project.title[language])} />
            <p className={styles['project-detail__subtitle']} dangerouslySetInnerHTML={htmlContent(project.subtitle[language])} />
            <p className={styles['project-detail__description']} dangerouslySetInnerHTML={htmlContent(project.description[language])} />

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
              <button className={styles['project-detail__gallery-main']} onClick={() => setLightboxIndex(selectedMedia)} aria-label={project.media[selectedMedia].alt[language]}>
                {project.media[selectedMedia].type === 'video' ? (
                  <video
                    src={project.media[selectedMedia].src}
                    controls
                    className={styles['project-detail__gallery-media']}
                    onClick={(e) => e.stopPropagation()}
                  />
                ) : (
                  <Image
                    src={project.media[selectedMedia].src}
                    alt={project.media[selectedMedia].alt[language]}
                    className={styles['project-detail__gallery-media']}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                )}
              </button>
              {project.media.length > 1 && (
                <div className={styles['project-detail__gallery-thumbs']}>
                  {project.media.map((item, index) => (
                    <button
                      key={item.src}
                      className={`${styles['project-detail__thumb']} ${index === selectedMedia ? styles['project-detail__thumb--active'] : ''}`}
                      onClick={() => setSelectedMedia(index)}
                      aria-label={item.alt[language]}
                    >
                      <Image src={item.src} alt={item.alt[language]} fill sizes="80px" />
                    </button>
                  ))}
                </div>
              )}
            </section>
          )}

          {project.confidentialNote && (
            <p className={styles['project-detail__confidential']}>{project.confidentialNote[language]}</p>
          )}

          <div className={styles['project-detail__sections']}>
            {hasContent(project.challenge[language]) && (
              <section className={styles['project-detail__section']}>
                <h2 className={styles['project-detail__section-title']}>{t('projects.challenge')}</h2>
                <p className={styles['project-detail__section-text']} dangerouslySetInnerHTML={htmlContent(project.challenge[language])} />
              </section>
            )}

            {hasContent(project.uxDecisions[language]) && (
              <section className={styles['project-detail__section']}>
                <h2 className={styles['project-detail__section-title']}>{t('projects.uxDecisions')}</h2>
                <p className={styles['project-detail__section-text']} dangerouslySetInnerHTML={htmlContent(project.uxDecisions[language])} />
              </section>
            )}

            {hasContent(project.architecture[language]) && (
              <section className={styles['project-detail__section']}>
                <h2 className={styles['project-detail__section-title']}>{t('projects.architecture')}</h2>
                <p className={styles['project-detail__section-text']} dangerouslySetInnerHTML={htmlContent(project.architecture[language])} />
              </section>
            )}

            {hasContent(project.aiIntegration[language]) && (
              <section className={styles['project-detail__section']}>
                <h2 className={styles['project-detail__section-title']}>{t('projects.aiIntegration')}</h2>
                <p className={styles['project-detail__section-text']} dangerouslySetInnerHTML={htmlContent(project.aiIntegration[language])} />
              </section>
            )}

            {project.problemsSolved && hasContent(project.problemsSolved[language]) && (
              <section className={styles['project-detail__section']}>
                <h2 className={styles['project-detail__section-title']}>{t('projects.problemsSolved')}</h2>
                <p className={styles['project-detail__section-text']} dangerouslySetInnerHTML={htmlContent(project.problemsSolved[language])} />
              </section>
            )}

            {project.metrics && hasContent(project.metrics[language]) && (
              <section className={styles['project-detail__section']}>
                <h2 className={styles['project-detail__section-title']}>{t('projects.metrics')}</h2>
                <div className={styles['project-detail__section-text']} style={{ whiteSpace: 'pre-line' }}>
                  {project.metrics[language].split('\n').map((line, i) => (
                    <p key={i} dangerouslySetInnerHTML={htmlContent(line)} />
                  ))}
                </div>
              </section>
            )}

            {project.myRole && hasContent(project.myRole[language]) && (
              <section className={styles['project-detail__section']}>
                <h2 className={styles['project-detail__section-title']}>{t('projects.myRole')}</h2>
                <p className={styles['project-detail__section-text']} dangerouslySetInnerHTML={htmlContent(project.myRole[language])} />
              </section>
            )}

            {project.techDetails && hasContent(project.techDetails[language]) && (
              <section className={styles['project-detail__section']}>
                <h2 className={styles['project-detail__section-title']}>{t('projects.techDetails')}</h2>
                <div className={styles['project-detail__section-text']} style={{ whiteSpace: 'pre-line' }}>
                  {project.techDetails[language].split('\n').map((line, i) => (
                    <p key={i} dangerouslySetInnerHTML={htmlContent(line)} />
                  ))}
                </div>
              </section>
            )}

            {project.deployment && hasContent(project.deployment[language]) && (
              <section className={styles['project-detail__section']}>
                <h2 className={styles['project-detail__section-title']}>{t('projects.deployment')}</h2>
                <div className={styles['project-detail__section-text']} style={{ whiteSpace: 'pre-line' }}>
                  {project.deployment[language].split('\n').map((line, i) => (
                    <p key={i} dangerouslySetInnerHTML={htmlContent(line)} />
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </main>
      <Footer />

      {lightboxIndex !== null && (
        <div className={styles.lightbox} onClick={() => setLightboxIndex(null)} role="dialog" aria-label={project.media[lightboxIndex].alt[language]}>
          <button className={styles.lightbox__close} onClick={() => setLightboxIndex(null)} aria-label="Close">
            <X size={28} />
          </button>

          {project.media.length > 1 && (
            <>
              <button className={`${styles.lightbox__nav} ${styles['lightbox__nav--prev']}`} onClick={(e) => { e.stopPropagation(); goPrev(); }} aria-label="Previous">
                <ChevronLeft size={32} />
              </button>
              <button className={`${styles.lightbox__nav} ${styles['lightbox__nav--next']}`} onClick={(e) => { e.stopPropagation(); goNext(); }} aria-label="Next">
                <ChevronRight size={32} />
              </button>
            </>
          )}

          <div className={styles.lightbox__content} onClick={(e) => e.stopPropagation()}>
            {project.media[lightboxIndex].type === 'video' ? (
              <video src={project.media[lightboxIndex].src} controls className={styles.lightbox__media} autoPlay />
            ) : (
              <Image
                src={project.media[lightboxIndex].src}
                alt={project.media[lightboxIndex].alt[language]}
                className={styles.lightbox__media}
                fill
                sizes="100vw"
              />
            )}
          </div>

          <div className={styles.lightbox__counter}>
            {lightboxIndex + 1} / {project.media.length}
          </div>
        </div>
      )}
    </>
  );
}
