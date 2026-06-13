'use client';

import { createContext, useContext, useState, useEffect, useCallback, useRef, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { sanitizeHtml } from '@/lib/sanitize';
import { translations, type Language } from '@/lib/translations';

type TranslationFunction = (key: string) => string;
type TranslationHtmlFunction = (key: string) => string;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationFunction;
  tHtml: TranslationHtmlFunction;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function flattenTranslations(obj: Record<string, unknown>, prefix = ''): Map<string, string> {
  const result = new Map<string, string>()
  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key
    if (typeof value === 'string') {
      result.set(path, value)
    } else if (value && typeof value === 'object') {
      const nested = flattenTranslations(value as Record<string, unknown>, path)
      nested.forEach((v, k) => result.set(k, v))
    }
  }
  return result
}

const flatCache = new Map<Language, Map<string, string>>()
flatCache.set('es', flattenTranslations(translations.es as unknown as Record<string, unknown>))
flatCache.set('en', flattenTranslations(translations.en as unknown as Record<string, unknown>))

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [language, setLanguageState] = useState<Language>('es');
  const [mounted, setMounted] = useState(false);
  const flatRef = useRef(flatCache)

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem('portfolio-language') as Language;

    if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
      setLanguageState(savedLang);
      return;
    }

    const langFromUrl = pathname?.startsWith('/en/') || pathname === '/en' ? 'en' : 'es';
    setLanguageState(langFromUrl);
  }, [pathname]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio-language', lang);
    document.cookie = `portfolio-language=${lang};path=/;max-age=31536000;SameSite=Lax`;
    document.documentElement.lang = lang;
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = language;
    }
  }, [language, mounted]);

  const t: TranslationFunction = useCallback((key: string) => {
    return flatRef.current.get(language)?.get(key) ?? key;
  }, [language]);

  const tHtml: TranslationHtmlFunction = useCallback((key: string) => {
    const raw = flatRef.current.get(language)?.get(key) ?? key;
    return sanitizeHtml(raw);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tHtml }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
