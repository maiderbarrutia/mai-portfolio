'use client'

import { useState, useEffect } from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import styles from './Footer.module.scss'

export default function Footer() {
  const { t } = useLanguage()
  const [currentYear, setCurrentYear] = useState(2026)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <span className={styles.logo}>MB</span>
            <p className={styles.tagline}>{t('footer.tagline')}</p>
          </div>

          <nav className={styles.nav} aria-label="Footer navigation">
            <a href="#about">{t('nav.about')}</a>
            <a href="#projects">{t('nav.projects')}</a>
            <a href="#experience">{t('nav.experience')}</a>
            <a href="#contact">{t('nav.contact')}</a>
          </nav>

          <div className={styles.social}>
            <a
              href="https://github.com/maiderbarrutia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/maiderbarrutia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://twitter.com/maiderbarrutia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} Maider Barrutia. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  )
}
