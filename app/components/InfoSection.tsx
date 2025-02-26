"use client";

import { Accordion, AccordionItem } from "@heroui/react";
import { useLanguage } from "../LanguageContext";

export default function InfoSection() {
  const { t } = useLanguage();

  return (
    <div className="relative w-full min-h-[70vh] flex flex-col justify-center items-center bg-primary-light dark:bg-primary-dark p-8 md:p-16">
      {/* Título de la sección */}
      <div className="text-center mb-16 z-10 relative">
        <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-6xl font-bold tracking-tighter">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-textMain-light to-textSubtle-light dark:from-textMain-dark dark:to-textSubtle-dark">
            {t("infoSection.title")}
          </span>
        </h2>
      </div>

      {/* Accordion con la información */}
      <Accordion selectionMode="multiple" className="w-full max-w-screen-xl mx-auto">
        <AccordionItem
          key="1"
          aria-label={t("infoSection.experienceAndSpecialization")}
          title={
            <span className="text-xl font-bold tracking-tight text-textMain-light dark:text-textMain-dark">
              {t("infoSection.experienceAndSpecialization")}
            </span>
          }
        >
          <div className="text-textSubtle-light dark:text-textSubtle-dark">
            {t("infoSection.experienceDescription")}
          </div>
        </AccordionItem>

        {/* Network of Contacts */}
        <AccordionItem
          key="2"
          aria-label={t("infoSection.networkOfContacts")}
          title={
            <span className="text-xl font-bold tracking-tight text-textMain-light dark:text-textMain-dark">
              {t("infoSection.networkOfContacts")}
            </span>
          }
        >
          <div className="text-textSubtle-light dark:text-textSubtle-dark">
            {t("infoSection.networkDescription")}
          </div>
        </AccordionItem>

        {/* Customized Solutions */}
        <AccordionItem
          key="3"
          aria-label={t("infoSection.customizedSolutions")}
          title={
            <span className="text-xl font-bold tracking-tight text-textMain-light dark:text-textMain-dark">
              {t("infoSection.customizedSolutions")}
            </span>
          }
        >
          <div className="text-textSubtle-light dark:text-textSubtle-dark">
            {t("infoSection.customizedDescription")}
          </div>
        </AccordionItem>

        {/* Integrated Approach */}
        <AccordionItem
          key="4"
          aria-label={t("infoSection.integratedApproach")}
          title={
            <span className="text-xl font-bold tracking-tight text-textMain-light dark:text-textMain-dark">
              {t("infoSection.integratedApproach")}
            </span>
          }
        >
          <div className="text-textSubtle-light dark:text-textSubtle-dark">
            {t("infoSection.integratedDescription")}
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
