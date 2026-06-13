'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { getFeaturedProjects } from '@/data/projects';
import { useInView } from '@/hooks/use-intersection-observer';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.scss';

export default function Projects() {
  const { t, language } = useLanguage();
  const featuredProjects = getFeaturedProjects().slice(0, 3);
  const projectsHref = language === 'es' ? '/proyectos' : '/en/projects';
  const { ref, isVisible } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className={styles.projects} id="projects">
      <div className={styles['projects__container']}>
        <header className={styles['projects__header']}>
          <span className={styles['projects__section-tag']}>{t('projects.tag')}</span>
          <h2 className={styles['projects__title']}>{t('projects.title')}</h2>
          <p className={styles['projects__subtitle']}>{t('projects.subtitle')}</p>
        </header>

        <div className={styles['projects__grid']} ref={ref}>
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`${styles['projects__grid-item']} ${isVisible ? styles['projects__grid-item--visible'] : ''}`}
              style={{ '--grid-item-delay': `${index * 0.1}s` } as React.CSSProperties}
            >
              <ProjectCard project={project} priority={index === 0} />
            </div>
          ))}
        </div>

        <div className={styles['projects__actions']}>
          <Link href={projectsHref} className={styles['projects__view-all']}>
            {t('projects.viewAll')}
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
