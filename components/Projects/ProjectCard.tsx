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
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        {imgError ? (
          <div className={styles.imagePlaceholder}>
            <ImageIcon size={48} />
          </div>
        ) : (
          <img
            src={project.image}
            alt={project.title[language]}
            className={styles.image}
            loading="lazy"
            onError={() => setImgError(true)}
          />
        )}
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
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
