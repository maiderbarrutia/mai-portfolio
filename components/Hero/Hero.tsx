'use client';

import { useLanguage } from '@/context/LanguageContext';
import styles from './Hero.module.scss';

export default function Hero() {
  const { t, tHtml } = useLanguage();

  return (
    <section className={styles.hero} id="about">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            <span>Open to new challenges</span>
          </div>
          
          <h1 className={styles.title}>
            <span className={styles.name}>{t('hero.title')}</span>
            <span className={styles.role}>{t('hero.subtitle')}</span>
          </h1>
          
          <p className={styles.description} dangerouslySetInnerHTML={{ __html: tHtml('hero.description') }} />
          
          <div className={styles.ctas}>
            <a href="#projects" className={styles.ctaPrimary}>
              {t('hero.ctaProjects')}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </a>
            <a href="#contact" className={styles.ctaSecondary}>
              {t('hero.ctaContact')}
            </a>
          </div>
        </div>
        
        <div className={styles.visual}>
          <div className={styles.bentoGrid}>
            <div className={`${styles.bentoItem} ${styles.bentoLarge}`}>
              <div className={styles.bentoContent}>
                <span className={styles.bentoIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"/>
                    <polyline points="8 6 2 12 8 18"/>
                  </svg>
                </span>
                <span className={styles.bentoLabel}>Frontend</span>
                <span className={styles.bentoStat}>6+ years</span>
              </div>
            </div>
            
            <div className={styles.bentoItem}>
              <div className={styles.bentoContent}>
                <span className={styles.bentoIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                    <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/>
                  </svg>
                </span>
                <span className={styles.bentoLabel}>UI Design (pixel-perfect)</span>
              </div>
            </div>
            
            <div className={styles.bentoItem}>
              <div className={styles.bentoContent}>
                <span className={styles.bentoIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <circle cx="12" cy="12" r="4"/>
                  </svg>
                </span>
                <span className={styles.bentoLabel}>Backend (Node.js)</span>
              </div>
            </div>
            
            <div className={`${styles.bentoItem} ${styles.bentoAccent}`}>
              <div className={styles.bentoContent}>
                <span className={styles.bentoIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 8V4H8"/>
                    <rect width="16" height="12" x="4" y="8" rx="2"/>
                    <path d="M2 14h2"/>
                    <path d="M20 14h2"/>
                    <path d="M15 13v2"/>
                    <path d="M9 13v2"/>
                  </svg>
                </span>
                <span className={styles.bentoLabel}>AI-Driven Development & Workflows</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className={styles.decorCircle1}></div>
      <div className={styles.decorCircle2}></div>
    </section>
  );
}
