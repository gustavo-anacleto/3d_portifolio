import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importa os arquivos de tradução
import enTranslation from "./locales/en.json";
import ptTranslation from "./locales/pt.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    pt: {
      translation: ptTranslation,
    },
  },
  lng: "pt", // Idioma padrão
  fallbackLng: "en", // Idioma de fallback
  interpolation: {
    escapeValue: false, // React já faz a sanitização
  },
});

export default i18n;
