import GenericAccordion from "@/app/components/GenericAccordion";

const InvestorsAccordion = () => {
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

export default InvestorsAccordion