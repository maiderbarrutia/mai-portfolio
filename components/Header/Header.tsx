'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import styles from './Header.module.scss';

export default function Header() {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: t('nav.about') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#experience', label: t('nav.experience') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} aria-label="Maider Barrutia - Home">
          {/* <span className={styles.logoText}>MB</span> */}
          <img src="/mai-logo.svg" alt="Maider Barrutia Logo" className={styles.logoImg} />
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={styles.navLink}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Controls */}
        <div className={styles.controls}>
          {/* Language Toggle */}
          <button
            className={styles.controlBtn}
            onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
            aria-label={t('language.toggle')}
            title={t('language.toggle')}
          >
            <span className={styles.langText}>{language.toUpperCase()}</span>
          </button>

          {/* Theme Toggle */}
          <button
            className={styles.controlBtn}
            onClick={toggleTheme}
            aria-label={t('theme.toggle')}
            title={theme === 'light' ? t('theme.dark') : t('theme.light')}
          >
            {theme === 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2"/>
                <path d="M12 20v2"/>
                <path d="m4.93 4.93 1.41 1.41"/>
                <path d="m17.66 17.66 1.41 1.41"/>
                <path d="M2 12h2"/>
                <path d="M20 12h2"/>
                <path d="m6.34 17.66-1.41 1.41"/>
                <path d="m19.07 4.93-1.41 1.41"/>
              </svg>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className={styles.menuToggle}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav 
        className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.open : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!isMobileMenuOpen}
      >
        <ul className={styles.mobileNavList}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a 
                href={item.href} 
                className={styles.mobileNavLink}
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
