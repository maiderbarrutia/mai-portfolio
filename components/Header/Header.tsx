'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Moon, Sun } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import styles from './Header.module.scss';

export default function Header() {
  const { t, language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/#about', label: t('nav.about') },
    { href: '/#projects', label: t('nav.projects') },
    { href: '/#tech', label: t('nav.tech') },
    { href: '/#experience', label: t('nav.experience') },
    { href: '/#contact', label: t('nav.contact') },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles['header--scrolled'] : ''}`}>
      <div className={styles.header__container}>
        <Link href="/" className={styles.header__logo} aria-label="Maider Barrutia - Home">
          <img src="/mai-logo.svg" alt="Maider Barrutia Logo" />
        </Link>

        <nav className={styles['header__desktop-nav']} aria-label="Main navigation">
          <ul className={styles['header__nav-list']}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={styles['header__nav-link']}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.header__controls}>
          <button
            className={styles['header__lang-btn']}
            onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
            aria-label={t('language.toggle')}
            title={t('language.toggle')}
          >
            <span className={`${styles['header__lang-opt']} ${language === 'es' ? styles['header__lang-opt--active'] : ''}`}>ES</span>
            <span className={styles['header__lang-sep']}>/</span>
            <span className={`${styles['header__lang-opt']} ${language === 'en' ? styles['header__lang-opt--active'] : ''}`}>EN</span>
          </button>

          <button
            className={styles['header__control-btn']}
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label={t('theme.toggle')}
            title={theme === 'light' ? t('theme.dark') : t('theme.light')}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button
            className={styles['header__menu-toggle']}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <span className={`${styles.header__hamburger} ${isMobileMenuOpen ? styles['header__hamburger--active'] : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>

      <nav
        className={`${styles['header__mobile-nav']} ${isMobileMenuOpen ? styles['header__mobile-nav--open'] : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!isMobileMenuOpen}
      >
        <ul className={styles['header__mobile-nav-list']}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={styles['header__mobile-nav-link']}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
