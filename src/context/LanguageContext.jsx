import { createContext, useContext, useState, useEffect } from "react";
import { en } from "../locales/en";
import { id } from "../locales/id";

const LanguageContext = createContext(null);

const STORAGE_KEY = "portfolio_lang";
const VALID_LANGUAGES = ["en", "id"];
const DEFAULT_LANGUAGE = "en";

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && VALID_LANGUAGES.includes(saved)) {
        return saved;
      }
    } catch {
      // Fallback if localStorage is inaccessible
    }
    return DEFAULT_LANGUAGE;
  });

  const setLanguage = (lang) => {
    if (!VALID_LANGUAGES.includes(lang)) return;
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore localStorage write failure
    }
  };

  useEffect(() => {
    try {
      document.documentElement.lang = language;
    } catch {
      // Ignore if document is unavailable
    }
  }, [language]);

  const dictionary = language === "id" ? id : en;

  const t = (path, fallback = "") => {
    if (!path) return fallback;
    const keys = path.split(".");
    let current = dictionary;
    for (const key of keys) {
      if (current && typeof current === "object" && key in current) {
        current = current[key];
      } else {
        return fallback || path;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        dictionary,
        isEn: language === "en",
        isId: language === "id",
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
