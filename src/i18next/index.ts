import I18next, { InitOptions } from 'i18next';
import Cookies from 'js-cookie';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en';
import ru from './locales/ru';

export const resources = { en, ru } as const;

const i18NextConfig: InitOptions = {
  debug: process.env.NODE_ENV === 'development',
  defaultNS: 'common',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  load: 'languageOnly',
  resources,
};

I18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(i18NextConfig);

export const [locale] = I18next.language.split('-');

Cookies.set('locale', locale.toUpperCase());

export default I18next;
