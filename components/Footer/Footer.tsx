'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Github, Linkedin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Footer.module.scss';

export default function Footer() {
  const { t } = useLanguage();
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__content}>
          <div className={styles.footer__brand}>
            <Image src="/mai-logo.svg" alt="Maider Barrutia Logo" width={60} height={60} />
          </div>

          <nav className={styles.footer__nav} aria-label="Footer navigation">
            <Link href="/#about" className={styles['footer__nav-link']}>{t('nav.about')}</Link>
            <Link href="/#projects" className={styles['footer__nav-link']}>{t('nav.projects')}</Link>
            <Link href="/#tech" className={styles['footer__nav-link']}>{t('nav.tech')}</Link>
            <Link href="/#experience" className={styles['footer__nav-link']}>{t('nav.experience')}</Link>
            <Link href="/#contact" className={styles['footer__nav-link']}>{t('nav.contact')}</Link>
          </nav>

          <div className={styles.footer__social}>
            <a href="https://github.com/maiderbarrutia" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={20} aria-hidden="true" />
            </a>
            <a href="https://linkedin.com/in/maiderbarrutiaunzueta" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className={styles.footer__bottom}>
          <p>&copy; {currentYear} Maider Barrutia. {t('footer.rights')}</p>
          <Link href="/legal" className={styles['footer__legal-link']}>{t('footer.legal')}</Link>
        </div>
      </div>
    </footer>
  );
}
