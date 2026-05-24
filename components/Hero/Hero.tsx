'use client';

import { Code, Palette, ShieldCheck, Monitor, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { SanitizedHTML } from '@/components/SanitizedHTML';
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

          <SanitizedHTML html={tHtml('hero.description')} className={styles.description} />

          <div className={styles.ctas}>
            <a href="#projects" className={styles.ctaPrimary}>
              {t('hero.ctaProjects')}
              <ArrowRight size={20} />
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
                  <Code size={32} />
                </span>
                <span className={styles.bentoLabel}>Frontend</span>
                <span className={styles.bentoStat}>6+ years</span>
              </div>
            </div>

            <div className={styles.bentoItem}>
              <div className={styles.bentoContent}>
                <span className={styles.bentoIcon}>
                  <Palette size={24} />
                </span>
                <span className={styles.bentoLabel}>UI Design (pixel-perfect)</span>
              </div>
            </div>

            <div className={styles.bentoItem}>
              <div className={styles.bentoContent}>
                <span className={styles.bentoIcon}>
                  <ShieldCheck size={24} />
                </span>
                <span className={styles.bentoLabel}>Backend (Node.js)</span>
              </div>
            </div>

            <div className={`${styles.bentoItem} ${styles.bentoAccent}`}>
              <div className={styles.bentoContent}>
                <span className={styles.bentoIcon}>
                  <Monitor size={24} />
                </span>
                <span className={styles.bentoLabel}>AI-Driven Development & Workflows</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.decorCircle1}></div>
      <div className={styles.decorCircle2}></div>
    </section>
  );
}
