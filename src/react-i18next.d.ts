import { resources } from './i18next';

// react-i18next versions lower than 11.11.0
declare module 'react-i18next' {
  type DefaultResources = typeof resources['en'];
  interface Resources extends DefaultResources {}
}

// react-i18next versions higher than 11.11.0
declare module 'react-i18next' {
  type TranslationKeys = string;
}
