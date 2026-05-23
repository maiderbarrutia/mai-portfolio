'use client';

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { translations, type Language } from '@/lib/translations';

type TranslationFunction = (key: string) => string;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationFunction;
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
    } else {
      // SI NO HAY NADA GUARDADO: Detectamos el idioma del navegador
      const browserLang = navigator.language || navigator.languages[0];
      
      if (browserLang.startsWith('en')) {
        setLanguageState('en');
      } else {
        setLanguageState('es'); // Por defecto para cualquier otro idioma (español)
      }
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

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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