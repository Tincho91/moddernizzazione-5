"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/app/LanguageContext";

export default function StartupHero() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-white text-primary-light dark:bg-primary-dark dark:text-white">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src="/graph.png"
          alt="Background Graph"
          className="w-full h-full max-w-full max-h-full object-cover sm:object-contain opacity-20"
        />
      </div>

      {/* Contenedor principal */}
      <div className="relative z-10 w-full max-w-7xl p-8 xl:p-0 mx-auto text-center lg:max-w-[70%] xl:max-w-[50%]">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold mb-10 lg:mb-24 text-transparent bg-clip-text bg-gradient-to-r from-black to-primary-light dark:from-border-dark dark:to-textMain-dark"
        >
          {t("startupHero.title")}
        </motion.h1>

        <div className="w-full mx-auto text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl font-bold mb-5"
          >
            {t("startupHero.subtitle")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl leading-relaxed mx-auto mt-3"
          >
            {t("startupHero.description1")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl leading-relaxed mx-auto mt-3"
          >
            {t("startupHero.description2")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.8 }}
            className="text-base sm:text-lg md:text-xl leading-relaxed mx-auto mt-3"
          >
            {t("startupHero.description3")}
          </motion.p>
        </div>
      </div>
    </div>
  );
}