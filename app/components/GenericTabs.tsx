"use client";

import { useLanguage } from "@/app/LanguageContext";
import { Tabs, Tab, Card, CardBody } from "@heroui/react";
import { useState, useEffect } from "react";

interface TabItem {
  id: string;
  labelKey: string;
  contentKey: string;
}

interface TabsProps {
  tabs: TabItem[];
  titleKey: string; // Nueva propiedad para el título
}

export default function GenericTabs({ tabs, titleKey }: TabsProps) {
  const { t } = useLanguage();
  const [selectedTab, setSelectedTab] = useState<string | null>(tabs[0]?.id || null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Actualiza el estado de isMobile según el ancho de la ventana
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Llama a handleResize para establecer el valor inicial
    handleResize();

    // Escucha los cambios de tamaño de la ventana
    window.addEventListener("resize", handleResize);

    // Limpia el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center space-y-6 bg-white dark:bg-primary-dark xl:p-0 text-center">
      <div className="w-full max-w-7xl mx-auto py-10 space-y-10">
        <h2 className="px-6 text-4xl sm:text-6xl md:text-7xl font-bold mb-10 lg:mb-24 text-transparent bg-clip-text bg-gradient-to-r from-black to-primary-light dark:from-border-dark dark:to-textMain-dark">
          {t(titleKey)}
        </h2>

        {isMobile ? (
          // Versión mobile
          <div className="w-full px-5">
            <select
              className="w-full mx-auto bg-secondary-light dark:bg-secondary-dark p-4 border border-border-light dark:border-border-dark rounded-xl "
              value={selectedTab || ""}
              onChange={(e) => setSelectedTab(e.target.value)}
            >
              {tabs.map((item) => (
                <option key={item.id} value={item.id}>
                  {t(item.labelKey)}
                </option>
              ))}
            </select>
            <Card className="w-full p-6 bg-secondary-light dark:bg-secondary-dark border border-border-light dark:border-border-dark shadow-lg rounded-xl mt-4">
              <CardBody className="text-black dark:text-textMain-dark">
                <ul className="list-disc list-inside space-y-2">
                  {(() => {
                    const content = t(tabs.find((tab) => tab.id === selectedTab)?.contentKey || "");
                    if (Array.isArray(content)) return content;
                    if (typeof content === "string") return content.split(". ");
                    return [];
                  })().map((point, idx) => (
                    <li key={idx}>{point.trim()}</li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          </div>
        ) : (
          // Versión para dispositivos grandes (Tabs tradicionales, 2 grupos de 3 tabs)
          <>
            {[tabs.slice(0, 3), tabs.slice(3, 6)].map((group, index) => (
              <Tabs
                key={index}
                aria-label={`Startup Services Group ${index + 1}`}
                items={group}
                className="w-full mx-auto flex justify-center"
                variant="bordered"
              >
                {(item) => (
                  <Tab key={item.id} title={t(item.labelKey)} className="text-center mx-5">
                    <Card className="w-full p-6 bg-secondary-light dark:bg-secondary-dark border border-border-light dark:border-border-dark shadow-lg rounded-xl overflow-hidden">
                      <CardBody className="text-black dark:text-textMain-dark">
                        <ul className="list-disc list-inside space-y-2">
                          {(() => {
                            const content = t(item.contentKey);
                            if (Array.isArray(content)) return content;
                            if (typeof content === "string") return content.split(". ");
                            return [];
                          })().map((point, idx) => (
                            <li key={idx}>{point.trim()}</li>
                          ))}
                        </ul>
                      </CardBody>
                    </Card>
                  </Tab>
                )}
              </Tabs>
            ))}
          </>
        )}
      </div>
    </div>
  );
}