"use client"

import { Accordion, AccordionItem } from "@heroui/react"; // Ensure this is correctly imported

export default function InfoSection() {
  return (
    <div className="relative w-full min-h-[70vh] flex flex-col justify-center items-center bg-white dark:bg-neutral-950 p-8 md:p-16">
      {/* Título de la sección */}
      <div className="text-center mb-16 z-10 relative">
        <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-6xl font-bold tracking-tighter">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80">
            Why Choose Us
          </span>
        </h2>
      </div>

      {/* Accordion con la información */}
      <Accordion selectionMode="multiple" className="w-full max-w-screen-xl mx-auto">
        {/* Experience and Specialization */}
        <AccordionItem key="1" aria-label="Experience and Specialization" title="Experience and Specialization">
          <div>
            We bring decades of specialized knowledge in corporate finance and M&A, equipping us to handle complex challenges with proficiency.
          </div>
        </AccordionItem>

        {/* Network of Contacts */}
        <AccordionItem key="2" aria-label="Network of Contacts" title="Network of Contacts">
          <div>
            Our extensive network of industry contacts enables us to connect clients with pivotal resources and opportunities.
          </div>
        </AccordionItem>

        {/* Customized Solutions */}
        <AccordionItem key="3" aria-label="Customized Solutions" title="Customized Solutions">
          <div>
            We tailor our services to meet the unique needs of each client, ensuring that our solutions align perfectly with their objectives.
          </div>
        </AccordionItem>

        {/* Integrated Approach */}
        <AccordionItem key="4" aria-label="Integrated Approach" title="Integrated Approach">
          <div>
            Our comprehensive approach integrates various aspects of financial services to provide cohesive and effective strategies.
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
}