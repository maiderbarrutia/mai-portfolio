'use client';

import { useLanguage } from '@/context/LanguageContext';
import { getFeaturedProjects } from '@/data/projects';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.scss';

export default function Projects() {
  const { t } = useLanguage();
  const featuredProjects = getFeaturedProjects();

  return (
    <section className={styles.section} id="projects">
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>{t('projects.title')}</h2>
          <p className={styles.subtitle}>{t('projects.subtitle')}</p>
        </header>
        
        <div className={styles.grid}>
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={styles.gridItem}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
