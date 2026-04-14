import { en } from './en';
import { es } from './es';

export type Lang = 'en' | 'es';

const translations = { en, es } as const;

export function useTranslations(lang: Lang) {
  return translations[lang] ?? translations.en;
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === 'en' ? 'es' : 'en';
}

/** Returns the URL for a given locale (homepage only for now) */
export function getLocaleUrl(lang: Lang): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return lang === "en" ? `${base}/` : `${base}/es/`;
}
