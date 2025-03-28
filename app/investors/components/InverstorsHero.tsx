"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/app/LanguageContext";

export default function StartupInvestorsHero() {
  const { t } = useLanguage();

  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-white text-primary-light dark:bg-primary-dark dark:text-white">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src="/graph.png"
          alt="Background Graph"
          className="w-full h-full max-w-full max-h-full object-cover sm:object-contain opacity-20"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl p-8 xl:p-0 mx-auto text-center lg:max-w-[75%] xl:max-w-[50%]">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold mb-10 lg:mb-24 text-transparent bg-clip-text bg-gradient-to-r from-black to-primary-light dark:from-border-dark dark:to-textMain-dark"
        >
          {t("startupInvestorsHero.title")}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.2 }}
          className="text-lg text-left sm:text-xl md:text-2xl font-bold mb-5"
        >
          {t("startupInvestorsHero.subtitle")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.4 }}
          className="text-base text-left sm:text-lg md:text-xl leading-relaxed mx-auto"
        >
          {t("startupInvestorsHero.description1")}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.6 }}
          className="text-base text-left sm:text-lg md:text-xl leading-relaxed mx-auto mt-3"
        >
          {t("startupInvestorsHero.description2")}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.8 }}
          className="text-base text-left sm:text-lg md:text-xl leading-relaxed mx-auto mt-3"
        >
          {t("startupInvestorsHero.description3")}
        </motion.p>
      </div>
    </div>
  );
}