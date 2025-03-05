"use client";

import { Accordion, AccordionItem } from "@heroui/react";
import { useLanguage } from "../LanguageContext";

// Definimos las interfaces para las props
interface AccordionItemData {
  labelKey: string;
  descriptionKey: string;
}

interface GenericAccordionProps {
  titleKey?: string;
  subtitleKey?: string;
  items: AccordionItemData[];
}

export default function GenericAccordion({ titleKey, subtitleKey, items }: GenericAccordionProps) {
  const { t } = useLanguage();

  // Función para obtener la traducción de los textos
  const getLabel = (key: string) => {
    const label = t(key);
    return Array.isArray(label) ? label.join(" ") : label;
  };

  return (
    <div className="relative w-full min-h-[70vh] flex flex-col justify-center items-center bg-primary-light dark:bg-primary-dark p-8 md:p-16">
      {/* Contenedor con ancho máximo de 7xl */}
      <div className="w-full max-w-7xl mx-auto">
        {/* Título de la sección (opcional) */}
        {titleKey && (
          <div className="text-center mb-4 z-10 relative">
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-6xl font-bold tracking-tighter">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-textMain-light to-textSubtle-light dark:from-textMain-dark dark:to-textSubtle-dark">
                {t(titleKey)}
              </span>
            </h2>
          </div>
        )}

        {/* Subtítulo opcional (más pequeño y alineado a la izquierda) */}
        {subtitleKey && (
          <p className="mb-8 text-lg sm:text-xl md:text-2xl text-textMain-light dark:text-textMain-dark text-left max-w-4xl">
            {t(subtitleKey)}
          </p>
        )}

        {/* Accordion con ancho máximo de 7xl */}
        <Accordion selectionMode="multiple" className="w-full">
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
    </div>
  );
}
