"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/app/LanguageContext";

export default function BusinessHero() {
  const { t } = useLanguage();

  return (
    <div className="w-full py-10 flex items-center justify-center overflow-x-hidden overflow-y-visible bg-white text-primary-light dark:bg-primary-dark dark:text-white">
      {/* Contenedor principal */}
      <div className="z-10 w-full max-w-7xl p-8 xl:p-0 mx-auto text-center lg:max-w-[70%] xl:max-w-[50%]">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold mb-10 lg:mb-14 text-transparent bg-clip-text bg-gradient-to-r from-black to-primary-light dark:from-border-dark dark:to-textMain-dark"
        >
          {t("businessHero.title")}
        </motion.h1>

        {/* Descripciones */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.2 }}
          className="text-base text-left sm:text-lg md:text-xl leading-relaxed mx-auto"
        >
          {t("businessHero.description")}
        </motion.p>
      </div>
    </div>
  );
}