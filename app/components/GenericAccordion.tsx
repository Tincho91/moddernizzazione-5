"use client";

import { Accordion, AccordionItem } from "@heroui/react";
import { useLanguage } from "../LanguageContext";

// Definimos las interfaces para las props
interface AccordionItemData {
  labelKey: string;
  descriptionKey: string;
}

interface GenericAccordionProps {
  titleKey: string;
  items: AccordionItemData[];
}

export default function GenericAccordion({ titleKey, items }: GenericAccordionProps) {
  const { t } = useLanguage();

  // Función para obtener la traducción de los textos
  const getLabel = (key: string) => {
    const label = t(key);
    return Array.isArray(label) ? label.join(" ") : label;
  };

  return (
    <div className="relative w-full min-h-[70vh] flex flex-col justify-center items-center bg-primary-light dark:bg-primary-dark p-8 md:p-16">
      {/* Título de la sección */}
      <div className="text-center mb-16 z-10 relative">
        <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-6xl font-bold tracking-tighter">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-textMain-light to-textSubtle-light dark:from-textMain-dark dark:to-textSubtle-dark">
            {t(titleKey)}
          </span>
        </h2>
      </div>

      {/* Accordion con los ítems */}
      <Accordion selectionMode="multiple" className="w-full max-w-screen-xl mx-auto">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            aria-label={getLabel(item.labelKey)}
            title={
              <span className="text-xl font-bold tracking-tight text-textMain-light dark:text-textMain-dark">
                {t(item.labelKey)}
              </span>
            }
            className="border-b border-white"
          >
            <div className="text-textSubtle-light dark:text-textSubtle-dark">
              {t(item.descriptionKey)}
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
