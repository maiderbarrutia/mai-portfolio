'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ImageIcon, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import type { Project } from '@/data/projects';
import styles from './ProjectCard.module.scss';

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectCard({ project, priority }: ProjectCardProps) {
  const { t, language } = useLanguage();
  const [imgError, setImgError] = useState(false);
  const href = `${language === 'es' ? '/proyectos' : '/projects'}/${project.slug[language]}`;

  return (
    <Link href={href} className={styles['project-card']} aria-label={project.title[language]}>
      <article className={styles['project-card__inner']}>
        <div className={styles['project-card__image-wrapper']}>
          {imgError ? (
            <div className={styles['project-card__image-placeholder']}>
              <ImageIcon size={48} />
            </div>
          ) : (
            <Image
              src={project.image}
              alt={project.title[language]}
              className={styles['project-card__image']}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

          <span className={styles['project-card__link']}>
            {t('projects.viewProject')}
            <ArrowRight size={16} />
          </span>
        </div>
      </article>
    </Link>
  );
}
