import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        searchResultSummary: 'Your search is: <strong>"{{search}}"</strong>',
        searchPlaceholder: 'Search for skills, names, departments...',
        searchButton: 'Search',
      },
    }
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});