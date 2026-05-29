'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { getFeaturedProjects } from '@/data/projects';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.scss';

export default function Projects() {
  const { t, language } = useLanguage();
  const featuredProjects = getFeaturedProjects().slice(0, 3);
  const projectsHref = language === 'es' ? '/proyectos' : '/projects';
  const gridRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.projects} id="projects">
      <div className={styles['projects__container']}>
        <header className={styles['projects__header']}>
          <span className={styles['projects__section-tag']}>{t('projects.tag')}</span>
          <h2 className={styles['projects__title']}>{t('projects.title')}</h2>
          <p className={styles['projects__subtitle']}>{t('projects.subtitle')}</p>
        </header>
        
        <div className={styles['projects__grid']} ref={gridRef}>
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`${styles['projects__grid-item']} ${isVisible ? styles['projects__grid-item--visible'] : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <ProjectCard project={project} />
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
