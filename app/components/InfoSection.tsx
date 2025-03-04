"use client";

import GenericAccordion from "./GenericAccordion";

export default function infoSection() {
  return (
    <div>
      <GenericAccordion
        titleKey="infoSection.title"
        items={[
          {
            labelKey: "infoSection.experienceAndSpecialization",
            descriptionKey: "infoSection.experienceDescription"
          },
          {
            labelKey: "infoSection.networkOfContacts",
            descriptionKey: "infoSection.networkDescription"
          },
          {
            labelKey: "infoSection.customizedSolutions",
            descriptionKey: "infoSection.customizedDescription"
          },
          {
            labelKey: "infoSection.integratedApproach",
            descriptionKey: "infoSection.integratedDescription"
          }
        ]}
      />
    </div>
  );
}
