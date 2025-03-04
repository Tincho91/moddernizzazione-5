"use client";

import GenericAccordion from "@/app/components/GenericAccordion";

export default function StartupAccordion() {

  return (
        <div>
          <GenericAccordion
            titleKey="investorsSection.title"
            items={[
              {
                labelKey: "investorsSection.experienceAndSpecialization",
                descriptionKey: "investorsSection.experienceDescription"
              },
              {
                labelKey: "investorsSection.networkOfContacts",
                descriptionKey: "investorsSection.networkDescription"
              },
              {
                labelKey: "investorsSection.customizedSolutions",
                descriptionKey: "investorsSection.customizedDescription"
              },
              {
                labelKey: "investorsSection.integratedApproach",
                descriptionKey: "investorsSection.integratedDescription"
              }
            ]}
          />
        </div>
      );
}
