"use client";

import { Accordion, AccordionItem } from "@heroui/react";
import { useLanguage } from "@/app/LanguageContext";

export default function StartupInfoSection() {
  const { t } = useLanguage();

  return (
    <div className="relative w-full min-h-[70vh] flex flex-col justify-center items-center bg-white text-primary-light dark:bg-primary-dark dark:text-white p-8 xl:p-0">
      <div className="w-full max-w-7xl">
        {/* Título de la sección */}
        <div className="text-center mb-16 z-10 relative">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-primary-light dark:from-border-dark dark:to-textMain-dark">
            <span>
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
              <span className="text-xl font-bold tracking-tight text-primary-light dark:text-white">
                {t("infoSection.experienceAndSpecialization")}
              </span>
            }
          >
            <div className="tracking-tight text-primary-light dark:text-white">
              {t("infoSection.experienceDescription")}
            </div>
          </AccordionItem>

          {/* Network of Contacts */}
          <AccordionItem
            key="2"
            aria-label={t("infoSection.networkOfContacts")}
            title={
              <span className="text-xl font-bold tracking-tight text-primary-light dark:text-white">
                {t("infoSection.networkOfContacts")}
              </span>
            }
          >
            <div className="tracking-tight text-primary-light dark:text-white">
              {t("infoSection.networkDescription")}
            </div>
          </AccordionItem>

          {/* Customized Solutions */}
          <AccordionItem
            key="3"
            aria-label={t("infoSection.customizedSolutions")}
            title={
              <span className="text-xl font-bold tracking-tight text-primary-light dark:text-white">
                {t("infoSection.customizedSolutions")}
              </span>
            }
          >
            <div className="tracking-tight text-primary-light dark:text-white">
              {t("infoSection.customizedDescription")}
            </div>
          </AccordionItem>

          {/* Integrated Approach */}
          <AccordionItem
            key="4"
            aria-label={t("infoSection.integratedApproach")}
            title={
              <span className="text-xl font-bold tracking-tight text-primary-light dark:text-white">
                {t("infoSection.integratedApproach")}
              </span>
            }
          >
            <div className="tracking-tight text-primary-light dark:text-white">
              {t("infoSection.integratedDescription")}
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
