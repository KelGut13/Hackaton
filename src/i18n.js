import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: require("./locales/en/translation.json") },
      es: { translation: require("./locales/es/translation.json") }
    },
    fallbackLng: localStorage.getItem("lng") || "es", // Recuperar idioma guardado o usar español por defecto
    interpolation: { escapeValue: false }
  });

// Guardar idioma cada vez que cambia
i18n.on("languageChanged", (lng) => {
  localStorage.setItem("lng", lng);
});

export default i18n;
