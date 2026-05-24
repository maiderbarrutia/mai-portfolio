'use client';

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import DOMPurify from 'isomorphic-dompurify';
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

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split('.');
  let current: unknown = obj;
  
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return path;
    }
  }
  
  return typeof current === 'string' ? current : path;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('es');
  const [mounted, setMounted] = useState(false);

  // === AQUÍ ESTÁ EL CAMBIO REQUERIDO ===
  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem('portfolio-language') as Language;
    
    if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
      // Si el usuario ya eligió un idioma en el pasado, lo respetamos
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio-language', lang);
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = language;
    }
  }, [language, mounted]);

  const t: TranslationFunction = (key: string) => {
    return getNestedValue(translations[language] as unknown as Record<string, unknown>, key);
  };

  const tHtml: TranslationHtmlFunction = (key: string) => {
    const raw = getNestedValue(translations[language] as unknown as Record<string, unknown>, key);
    // Sanitize the HTML to avoid XSS. Allow only a small safe set of tags/attributes.
    try {
      return DOMPurify.sanitize(raw, {
        ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'ul', 'ol', 'li', 'br', 'span', 'div'],
        ALLOWED_ATTR: ['href', 'target', 'rel', 'class'],
      });
    } catch (e) {
      return String(raw);
    }
  };

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