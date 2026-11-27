'use client';

import { Code, Download, Palette, ShieldCheck, Bot, Layers, Clock, Zap, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { SanitizedHTML } from '@/components/SanitizedHTML';
import styles from './Hero.module.scss';

export default function Hero() {
  const { t, tHtml, language } = useLanguage();

  return (
    <section className={styles.hero} id="about">
      <div className={styles.hero__container}>
        <div className={styles.hero__content}>
          <div className={styles.hero__badge}>
            <span className={styles['hero__badge-dot']}></span>
            <span>{t('hero.badge')}</span>
          </div>

          <h1 className={styles.hero__title}>
            <span className={styles.hero__name}>{t('hero.title')}</span>
            <span className={styles.hero__role}>{t('hero.subtitle')}</span>
          </h1>
          <a href={`/api/cv?lang=${language}`} target="_blank" rel="noopener noreferrer" className={styles['hero__cv-btn']}>
            <Download size={16} /> {t('hero.downloadCV')}
          </a>

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
            <div className={styles['hero__bento-item']}>
              <span className={styles['hero__bento-icon']}>
                <Code size={32} />
              </span>
              <div className={styles['hero__bento-content']}>
                <span className={styles['hero__bento-label']}>{t('hero.bentoFrontendSub')}</span>
                <span className={styles['hero__bento-subtitle']}>{t('hero.yearsExperience')}</span>
              </div>
            </div>

            <div className={styles['hero__bento-item']}>
              <span className={styles['hero__bento-icon']}>
                <Palette size={24} />
              </span>
              <div className={styles['hero__bento-content']}>
                <span className={styles['hero__bento-label']}>{t('hero.bentoPixel')}</span>
                <span className={styles['hero__bento-subtitle']}>{t('hero.bentoPixelSub')}</span>
              </div>
            </div>

            <div className={styles['hero__bento-item']}>
              <span className={styles['hero__bento-icon']}>
                <Palette size={24} />
              </span>
              <div className={styles['hero__bento-content']}>
                <span className={styles['hero__bento-label']}>{t('hero.bentoCss')}</span>
                <span className={styles['hero__bento-subtitle']}>{t('hero.bentoCssSub')}</span>
              </div>
            </div>

            <div className={styles['hero__bento-item']}>
              <span className={styles['hero__bento-icon']}>
                <Layers size={24} />
              </span>
              <div className={styles['hero__bento-content']}>
                <span className={styles['hero__bento-label']}>{t('hero.bentoArch')}</span>
                <span className={styles['hero__bento-subtitle']}>{t('hero.bentoArchSub')}</span>
              </div>
            </div>

            <div className={styles['hero__bento-item']}>
              <span className={styles['hero__bento-icon']}>
                <Clock size={24} />
              </span>
              <div className={styles['hero__bento-content']}>
                <span className={styles['hero__bento-label']}>{t('hero.bentoWpo')}</span>
                <span className={styles['hero__bento-subtitle']}>{t('hero.bentoWpoSub')}</span>
              </div>
            </div>

            <div className={styles['hero__bento-item']}>
              <span className={styles['hero__bento-icon']}>
                <Zap size={24} />
              </span>
              <div className={styles['hero__bento-content']}>
                <span className={styles['hero__bento-label']}>{t('hero.bentoAi')}</span>
                <span className={styles['hero__bento-subtitle']}>{t('hero.bentoAiSub')}</span>
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
