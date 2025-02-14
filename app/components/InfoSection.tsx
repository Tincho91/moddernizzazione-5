"use client";

import { Accordion, AccordionItem } from "@heroui/react";
import { useLanguage } from "../LanguageContext";

export default function InfoSection() {
  const { t } = useLanguage();

  return (
    <div className="relative w-full min-h-[70vh] flex flex-col justify-center items-center bg-white dark:bg-neutral-950 p-8 md:p-16">
      {/* Título de la sección */}
      <div className="text-center mb-16 z-10 relative">
        <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-6xl font-bold tracking-tighter">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80">
            {t("infoSection.title")}
          </span>
        </h2>
      </div>

      {/* Accordion con la información */}
      <Accordion selectionMode="multiple" className="w-full max-w-screen-xl mx-auto">
        {/* Experience and Specialization */}
        <AccordionItem key="1" aria-label={t("infoSection.experienceAndSpecialization")} title={
          <span className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
            {t("infoSection.experienceAndSpecialization")}
          </span>
        }>
          <div className="text-neutral-800 dark:text-neutral-200">
            {t("infoSection.experienceDescription")}
          </div>
        </AccordionItem>

        {/* Network of Contacts */}
        <AccordionItem key="2" aria-label={t("infoSection.networkOfContacts")} title={
          <span className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
            {t("infoSection.networkOfContacts")}
          </span>
        }>
          <div className="text-neutral-800 dark:text-neutral-200">
            {t("infoSection.networkDescription")}
          </div>
        </AccordionItem>

        {/* Customized Solutions */}
        <AccordionItem key="3" aria-label={t("infoSection.customizedSolutions")} title={
          <span className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
            {t("infoSection.customizedSolutions")}
          </span>
        }>
          <div className="text-neutral-800 dark:text-neutral-200">
            {t("infoSection.customizedDescription")}
          </div>
        </AccordionItem>

        {/* Integrated Approach */}
        <AccordionItem key="4" aria-label={t("infoSection.integratedApproach")} title={
          <span className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
            {t("infoSection.integratedApproach")}
          </span>
        }>
          <div className="text-neutral-800 dark:text-neutral-200">
            {t("infoSection.integratedDescription")}
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
}