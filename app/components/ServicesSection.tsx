"use client";

import { Card, CardHeader, CardBody, Button } from "@heroui/react";
import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} ${Math.sin(i / 5) * 100 + 100} C-${380 - i * 5 * position} ${Math.sin(i / 5) * 50 + 150} -${312 - i * 5 * position} ${Math.sin(i / 5) * 50 + 150} ${152 - i * 5 * position} ${Math.sin(i / 5) * 100 + 100} C${616 - i * 5 * position} ${Math.sin(i / 5) * 50 + 150} ${684 - i * 5 * position} ${Math.sin(i / 5) * 50 + 150} ${684 - i * 5 * position} ${Math.sin(i / 5) * 100 + 100}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <svg className="w-full h-full text-white" viewBox="0 0 696 316" fill="none">
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

export default function ServicesSection() {
  const { t } = useLanguage(); // Acceder al hook para traducir los textos

  return (
    <div className="relative w-full min-h-screen flex justify-center items-center bg-primary-light dark:bg-primary-dark p-8 md:p-16">
      <div className="absolute inset-0 z-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* Contenedor del Título y las Cards */}
      <div className="w-full max-w-screen-xl mx-auto">
        {/* Título de la sección */}
        <div className="text-center mb-16 z-10 relative">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-6xl font-bold tracking-tighter">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 dark:from-white dark:to-white/80">
                {t("services.title")}
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Contenedor de las cards */}
        <div className="relative">
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {/* Consulting Services Card */}
            <Card className="p-6 md:p-3 bg-secondary-light dark:bg-secondary-dark border border-border-light dark:border-border-dark shadow-lg rounded-xl z-10">
              <CardHeader className="text-center">
                <h3 className="text-3xl sm:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-black to-primary-light dark:from-border-dark dark:to-textMain-dark">
                  {t("services.consultingTitle")}
                </h3>
              </CardHeader>
              <CardBody className="text-black dark:text-textSubtle-dark text-lg leading-relaxed mb-4">
                {t("services.consultingDescription")}
              </CardBody>
              <div className="flex justify-center">
                <Button className="bg-primary-light dark:bg-primary-dark text-white py-2 px-4">
                  {t("services.learnMore")}
                </Button>
              </div>
            </Card>

            {/* For Investors Card */}
            <Card className="p-6 md:p-3 bg-secondary-light dark:bg-secondary-dark border border-border-light dark:border-border-dark shadow-lg rounded-xl z-10">
              <CardHeader className="text-center">
                <h3 className="text-3xl sm:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-black to-primary-light dark:from-border-dark dark:to-textMain-dark">
                  {t("services.investorsTitle")}
                </h3>
              </CardHeader>
              <CardBody className="text-black dark:text-textSubtle-dark text-lg leading-relaxed mb-4">
                {t("services.investorsDescription")}
              </CardBody>
              <div className="flex justify-center">
                <Button className="bg-primary-light dark:bg-primary-dark text-white py-2 px-4">
                  {t("services.learnMore")}
                </Button>
              </div>
            </Card>

            {/* Professional Firms Card */}
            <Card className="p-6 md:p-3 bg-secondary-light dark:bg-secondary-dark border border-border-light dark:border-border-dark shadow-lg rounded-xl z-10">
              <CardHeader className="text-center">
                <h3 className="text-3xl sm:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-black to-primary-light dark:from-border-dark dark:to-textMain-dark">
                  {t("services.professionalFirmsTitle")}
                </h3>
              </CardHeader>
              <CardBody className="text-black dark:text-textSubtle-dark text-lg leading-relaxed mb-4">
                {t("services.professionalFirmsDescription")}
              </CardBody>
              <div className="flex justify-center">
                <Button className="bg-primary-light dark:bg-primary-dark text-white py-2 px-4">
                  {t("services.learnMore")}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}