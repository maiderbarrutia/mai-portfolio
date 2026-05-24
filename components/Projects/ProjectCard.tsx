'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ImageIcon, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import type { Project } from '@/data/projects';
import styles from './ProjectCard.module.scss';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t, language } = useLanguage();
  const [imgError, setImgError] = useState(false);

  return (
    <article className={styles['project-card']}>
      <div className={styles['project-card__image-wrapper']}>
        {imgError ? (
          <div className={styles['project-card__image-placeholder']}>
            <ImageIcon size={48} />
          </div>
        ) : (
          <img
            src={project.image}
            alt={project.title[language]}
            className={styles['project-card__image']}
            loading="lazy"
            onError={() => setImgError(true)}
          />
        )}
      </div>

      <div className={styles['project-card__content']}>
        <h3 className={styles['project-card__title']}>{project.title[language]}</h3>
        <p className={styles['project-card__subtitle']}>{project.subtitle[language]}</p>

        <div className={styles['project-card__tags']}>
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className={styles['project-card__tag']}>{tag}</span>
          ))}
        </div>

        <Link href={`${language === 'es' ? '/proyectos' : '/projects'}/${project.id}`} className={styles['project-card__link']}>
          {t('projects.viewProject')}
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
