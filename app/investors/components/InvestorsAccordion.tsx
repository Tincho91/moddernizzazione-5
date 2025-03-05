import GenericAccordion from "@/app/components/GenericAccordion";

const InvestorsAccordion = () => {
  return (
    <div>
      <GenericAccordion
        titleKey="investorsAccordion.title"
        items={[
          {
            labelKey: "investorsAccordion.experienceAndSpecialization",
            descriptionKey: "investorsAccordion.experienceDescription"
          },
          {
            labelKey: "investorsAccordion.qualitySelection",
            descriptionKey: "investorsAccordion.qualityDescription"
          },
          {
            labelKey: "investorsAccordion.strategicSupport",
            descriptionKey: "investorsAccordion.strategicDescription"
          },
          {
            labelKey: "investorsAccordion.extensiveNetwork",
            descriptionKey: "investorsAccordion.networkDescription"
          }
        ]}
      />
    </div>
  );
};

export default InvestorsAccordion;