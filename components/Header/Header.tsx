'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Moon, Sun } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { projects } from '@/data/projects';
import styles from './Header.module.scss';

export default function Header() {
  const { t, language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = useCallback(() => {
    const nextLang = language === 'es' ? 'en' : 'es';
    setLanguage(nextLang);

    if (language === 'es') {
      if (pathname === '/') { router.push('/en'); return }
      if (pathname.startsWith('/proyectos')) {
        const rest = pathname.slice('/proyectos'.length);
        if (rest.startsWith('/')) {
          const slug = rest.slice(1);
          const project = projects.find(p => p.slug.es === slug);
          if (project) { router.push(`/en/projects/${project.slug.en}`); return }
        }
        router.push('/en/projects');
        return
      }
      if (pathname === '/legal') { router.push('/en/legal'); return }
      router.push('/en');
    } else {
      if (pathname === '/en') { router.push('/'); return }
      if (pathname.startsWith('/en/projects')) {
        const rest = pathname.slice('/en/projects'.length);
        if (rest.startsWith('/')) {
          const slug = rest.slice(1);
          const project = projects.find(p => p.slug.en === slug);
          if (project) { router.push(`/proyectos/${project.slug.es}`); return }
        }
        router.push('/proyectos');
        return
      }
      if (pathname === '/en/legal') { router.push('/legal'); return }
      router.push('/');
    }
  }, [language, pathname, setLanguage, router]);

  const prefix = language === 'en' ? '/en' : '';
  const navItems = [
    { href: `${prefix}/#about`, label: t('nav.about') },
    { href: `${prefix}/#projects`, label: t('nav.projects') },
    { href: `${prefix}/#tech`, label: t('nav.tech') },
    { href: `${prefix}/#experience`, label: t('nav.experience') },
    { href: `${prefix}/#contact`, label: t('nav.contact') },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles['header--scrolled'] : ''}`}>
      <div className={styles.header__container}>
        <Link href={language === 'en' ? '/en' : '/'} className={styles.header__logo} aria-label="Maider Barrutia - Home">
          <Image src="/mai-logo.svg" alt="Maider Barrutia Logo" width={44} height={44} priority />
        </Link>

        <nav className={styles['header__desktop-nav']} aria-label="Main navigation">
          <ul className={styles['header__nav-list']}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles['header__nav-link']}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.header__controls}>
          <button
            className={styles['header__lang-btn']}
            onClick={handleLanguageChange}
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
        inert={!isMobileMenuOpen ? true : undefined}
      >
        <ul className={styles['header__mobile-nav-list']}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={styles['header__mobile-nav-link']}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
