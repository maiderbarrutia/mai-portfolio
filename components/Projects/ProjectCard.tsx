'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import type { Project } from '@/data/projects';
import styles from './ProjectCard.module.scss';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t, language } = useLanguage();

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <div className={styles.imagePlaceholder}>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
            <circle cx="9" cy="9" r="2"/>
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
          </svg>
        </div>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title[language]}</h3>
        <p className={styles.subtitle}>{project.subtitle[language]}</p>
        
        <div className={styles.tags}>
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
        
        <Link href={`/projects/${project.id}`} className={styles.link}>
          {t('projects.viewProject')}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"/>
            <path d="m12 5 7 7-7 7"/>
          </svg>
        </Link>
      </div>
    </article>
  );
}
