"use client";

import { Button } from "@heroui/react";
import { useLanguage } from "../LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      onPress={() => setLanguage(language === "it" ? "en" : "it")}
    >
      <img
        src={language === "it" ? "/flags/gb.svg" : "/flags/it.svg"}
        alt={language === "it" ? "English Flag" : "Italian Flag"}
        className="w-6 h-6"
      />
    </Button>
  );
}
