import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from '../locales/en/translation.json';
import esTranslation from '../locales/es/translation.json';
import caTranslation from '../locales/ca/translation.json';

const resources = {
  en: {
    translation: enTranslation
  },
  es: {
    translation: esTranslation
  },
  ca: {
    translation: caTranslation
  }
};

i18n
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next) // Integración con React
  .init({
    resources,
    fallbackLng: 'es', // Idioma por defecto
    lng: undefined, // Deja que el detector lo determine
    supportedLngs: ['en', 'es', 'ca'],
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng'
    },
    interpolation: {
      escapeValue: false // React ya escapa por defecto
    }
  });

export default i18n;
