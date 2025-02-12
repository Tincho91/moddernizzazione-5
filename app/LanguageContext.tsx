"use client";

import type React from "react";
import { createContext, useState, useContext, useCallback } from "react";
import en from "../translations/en.json";
import it from "../translations/it.json";

type Language = "en" | "it";
type Translations = { [key: string]: string | Translations };

type TranslationKey = string;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const translations: Record<Language, Translations> = { en, it };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("it");

  const t = useCallback(
    (key: TranslationKey): string => {
      const keys = key.split(".");
      let value: string | Translations = translations[language];

      for (const k of keys) {
        if (typeof value !== "object" || value === null || !(k in value)) {
          return key; // Return key if translation not found
        }
        value = value[k];
      }

      return typeof value === "string" ? value : key;
    },
    [language]
  );

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};