import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import localize from '../../data/locale/index';

export const defaultNS = 'en';
export const resources = {
  en: localize.en,
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  debug: true,
  lng: 'en',
  fallbackLng: 'en',
  resources,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
