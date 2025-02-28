"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/app/LanguageContext";
import { useTheme } from "next-themes";

export default function StartupHero() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isLightMode = theme === "light";

  return (
    <div
      className={`relative h-screen w-full flex items-center justify-center overflow-x-hidden overflow-y-visible ${
        isLightMode ? "bg-white text-primary-light" : "bg-primary-dark text-white"
      }`}
    >
      {/* Imagen de fondo */}
      <div className="w-full h-full">
        <img
          src="/graph.png"
          alt="Background Graph"
          className="w-full h-full opacity-20"
        />
      </div>

      <div className="absolute top-[10%] md:top-[20%] w-full container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6 tracking-tighter">
            {t("hero.title")}
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-6">
            {t("hero.subtitle")}
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
            {t("hero.description1")}
          </p>

          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto mt-4">
            {t("hero.description2")}
          </p>
        </motion.div>
      </div>
    </div>
  );
}