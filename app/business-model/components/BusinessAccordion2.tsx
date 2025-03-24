import GenericAccordion from "@/app/components/GenericAccordion";

const BusinessAccordion2 = () => {
  return (
    <div>
      <GenericAccordion
        subtitleKey="businessAccordion2.subtitle"
        items={[
          {
            labelKey: "businessAccordion2.riskAndComplexity",
            descriptionKey: "businessAccordion2.riskAndComplexityDescription"
          },
          {
            labelKey: "businessAccordion2.preparationAndDuration",
            descriptionKey: "businessAccordion2.preparationAndDurationDescription"
          },
          {
            labelKey: "businessAccordion2.industryAndInvestors",
            descriptionKey: "businessAccordion2.industryAndInvestorsDescription"
          },
          {
            labelKey: "businessAccordion2.networkAndCommitment",
            descriptionKey: "businessAccordion2.networkAndCommitmentDescription"
          }
        ]}
      />
    </div>
  );
};

export default BusinessAccordion2;