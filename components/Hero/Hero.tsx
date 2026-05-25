'use client';

import { Code, Palette, ShieldCheck, Bot, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { SanitizedHTML } from '@/components/SanitizedHTML';
import styles from './Hero.module.scss';

export default function Hero() {
  const { t, tHtml } = useLanguage();

  return (
    <section className={styles.hero} id="about">
      <div className={styles.hero__container}>
        <div className={styles.hero__content}>
          <div className={styles.hero__badge}>
            <span className={styles['hero__badge-dot']}></span>
            <span>Open to new challenges</span>
          </div>

          <div className={styles.hero__title}>
            <span className={styles.hero__name}>{t('hero.title')}</span>
            <span className={styles.hero__role}>{t('hero.subtitle')}</span>
          </div>

          <SanitizedHTML html={tHtml('hero.description')} className={styles.hero__description} />

          <div className={styles.hero__ctas}>
            <a href="#projects" className={`${styles.hero__cta} ${styles['hero__cta--primary']}`}>
              {t('hero.ctaProjects')}
              <ArrowRight size={20} />
            </a>
            <a href="#contact" className={`${styles.hero__cta} ${styles['hero__cta--secondary']}`}>
              {t('hero.ctaContact')}
            </a>
          </div>
        </div>

        <div className={styles.hero__visual}>
          <div className={styles['hero__bento-grid']}>
            <div className={`${styles['hero__bento-item']} ${styles['hero__bento-item--large']}`}>
              <div className={styles['hero__bento-content']}>
                <span className={styles['hero__bento-icon']}>
                  <Code size={32} />
                </span>
                <span className={styles['hero__bento-label']}>Frontend</span>
                <span className={styles['hero__bento-stat']}>6+ years</span>
              </div>
            </div>

            <div className={styles['hero__bento-item']}>
              <div className={styles['hero__bento-content']}>
                <span className={styles['hero__bento-icon']}>
                  <Palette size={24} />
                </span>
                <span className={styles['hero__bento-label']}>UI Design (pixel-perfect)</span>
              </div>
            </div>

            <div className={styles['hero__bento-item']}>
              <div className={styles['hero__bento-content']}>
                <span className={styles['hero__bento-icon']}>
                  <ShieldCheck size={24} />
                </span>
                <span className={styles['hero__bento-label']}>Backend (Node.js)</span>
              </div>
            </div>

            <div className={`${styles['hero__bento-item']} ${styles['hero__bento-item--accent']}`}>
              <div className={styles['hero__bento-content']}>
                <span className={styles['hero__bento-icon']}>
                  <Bot size={24} />
                </span>
                <span className={styles['hero__bento-label']}>AI-Driven Development & Workflows</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles['hero__decor-circle']} />
      <div className={styles['hero__decor-circle']} />
      <div className={styles['hero__decor-circle']} />
      <div className={styles['hero__decor-circle']} />
      <div className={styles['hero__decor-circle']} />
      <div className={styles['hero__decor-circle']} />
    </section>
  );
}
