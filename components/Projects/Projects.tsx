'use client';

import { useLanguage } from '@/context/LanguageContext';
import { getFeaturedProjects } from '@/data/projects';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.scss';

export default function Projects() {
  const { t } = useLanguage();
  const featuredProjects = getFeaturedProjects();

  return (
    <section className={styles.projects} id="projects">
      <div className={styles['projects__container']}>
        <header className={styles['projects__header']}>
          <h2 className={styles['projects__title']}>{t('projects.title')}</h2>
          <p className={styles['projects__subtitle']}>{t('projects.subtitle')}</p>
        </header>
        
        <div className={styles['projects__grid']}>
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={styles['projects__grid-item']}
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
