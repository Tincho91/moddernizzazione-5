"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import { useLanguage } from "../LanguageContext";

export default function FounderSection() {
  const { t } = useLanguage();

  return (
    <div className="w-full flex justify-center items-center bg-white dark:bg-neutral-950 p-8 md:p-16">
      <Card className="w-full max-w-3xl mx-auto p-4 bg-neutral-100 dark:bg-neutral-900 border border-neutral-900 dark:border-neutral-100 shadow-lg rounded-xl overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center md:items-start">
          <CardHeader className="text-left px-3 lg:w-1/2">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
              <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-6xl font-bold tracking-tighter mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80">
                  {t("founder.title")}
                </span>
              </h2>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-medium mb-4 text-gray-700 dark:text-gray-300">
                {t("founder.name")}
              </p>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                {t("founder.description")}
              </p>
            </motion.div>
          </CardHeader>

          <CardBody className="flex justify-center my-auto md:justify-start md:w-1/2 lg:ml-12">
            <Image
              src="/founder.jpg"
              alt={t("founder.imageAlt")}
              className="rounded-lg object-cover w-full h-64 md:h-auto mx-auto"
            />
          </CardBody>
        </div>
      </Card>
    </div>
  );
}
