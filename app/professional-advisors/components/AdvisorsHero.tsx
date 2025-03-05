"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/app/LanguageContext";

export default function AdvisorsHero() {
  const { t } = useLanguage();

  return (
    <div className="w-full py-10 flex items-center justify-center bg-primary-light dark:bg-primary-dark">
      <div className="w-full container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6 tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 dark:from-white dark:to-white/80">
              {t("advisorsHero.title")}
            </span>
          </h1>
        </motion.div>
      </div>
    </div>
  );
}
