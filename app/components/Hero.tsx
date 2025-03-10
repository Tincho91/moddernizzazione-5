"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position} ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full text-white" viewBox="0 0 696 316" fill="none">
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function Hero() {
  const { t } = useLanguage();

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-x-hidden overflow-y-visible bg-primary-light dark:bg-primary-dark">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="absolute top-[10%] md:top-[20%] w-full container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6 tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 dark:from-white dark:to-white/80">
              {t("hero.title")}
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-6 text-textMain-light dark:text-textMain-dark">
            {t("hero.subtitle")}
          </h2>

          <p className="text-lg text-left sm:text-xl md:text-2xl text-textSubtle-light dark:text-textSubtle-dark leading-relaxed max-w-3xl mx-auto">
            {t("hero.description1")}
          </p>

          <p className="text-lg text-left sm:text-xl md:text-2xl text-textSubtle-light dark:text-textSubtle-dark leading-relaxed max-w-3xl mx-auto mt-4">
            {t("hero.description2")}
          </p>
        </motion.div>
      </div>
    </div>
  );
}