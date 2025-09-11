import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import icon from "./search-icon.svg";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        searchResultSummary: 'Your search <img src="' + icon + '" alt="search icon" /> is: "{{search}}"',
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