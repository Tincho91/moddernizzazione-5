import GenericAccordion from "@/app/components/GenericAccordion";

const BusinessAccordion2 = () => {
  return (
    <div>
      <GenericAccordion
        subtitleKey="businessAccordion2.subtitle"
        items={[
          {
            labelKey: "businessAccordion2.riskLevel",
            descriptionKey: "businessAccordion2.riskLevelDescription"
          },
          {
            labelKey: "businessAccordion2.complexity",
            descriptionKey: "businessAccordion2.complexityDescription"
          },
          {
            labelKey: "businessAccordion2.companyPreparation",
            descriptionKey: "businessAccordion2.companyPreparationDescription"
          },
          {
            labelKey: "businessAccordion2.estimatedDuration",
            descriptionKey: "businessAccordion2.estimatedDurationDescription"
          },
          {
            labelKey: "businessAccordion2.industry",
            descriptionKey: "businessAccordion2.industryDescription"
          },
          {
            labelKey: "businessAccordion2.investorType",
            descriptionKey: "businessAccordion2.investorTypeDescription"
          },
          {
            labelKey: "businessAccordion2.clientNetwork",
            descriptionKey: "businessAccordion2.clientNetworkDescription"
          },
          {
            labelKey: "businessAccordion2.dedicatedCommitment",
            descriptionKey: "businessAccordion2.dedicatedCommitmentDescription"
          },
          {
            labelKey: "businessAccordion2.operationSize",
            descriptionKey: "businessAccordion2.operationSizeDescription"
          },
          {
            labelKey: "businessAccordion2.exclusivity",
            descriptionKey: "businessAccordion2.exclusivityDescription"
          }
        ]}
      />
    </div>
  );
};

export default BusinessAccordion2;