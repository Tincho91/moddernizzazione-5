"use client";

import GenericAccordion from "@/app/components/GenericAccordion";

export default function StartupAccordion() {

  return (
        <div>
          <GenericAccordion
            titleKey="startupSection.title"
            items={[
              {
                labelKey: "startupSection.experienceAndSpecialization",
                descriptionKey: "startupSection.experienceDescription"
              },
              {
                labelKey: "startupSection.networkOfContacts",
                descriptionKey: "startupSection.networkDescription"
              },
              {
                labelKey: "startupSection.customizedSolutions",
                descriptionKey: "startupSection.customizedDescription"
              },
              {
                labelKey: "startupSection.integratedApproach",
                descriptionKey: "startupSection.integratedDescription"
              }
            ]}
          />
        </div>
      );
}