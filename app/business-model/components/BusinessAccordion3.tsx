import GenericAccordion from "@/app/components/GenericAccordion";

const BusinessAccordion3 = () => {
  return (
    <GenericAccordion
      titleKey="businessAccordion3.title"
      subtitleKey="businessAccordion3.subtitle"
      items={[
        {
          labelKey: "businessAccordion3.totalFundraisingAmount",
          descriptionKey: "businessAccordion3.totalFundraisingAmountDescription"
        },
        {
          labelKey: "businessAccordion3.projectRiskLevel",
          descriptionKey: "businessAccordion3.projectRiskLevelDescription"
        },
        {
          labelKey: "businessAccordion3.industry",
          descriptionKey: "businessAccordion3.industryDescription"
        },
        {
          labelKey: "businessAccordion3.maturityLevel",
          descriptionKey: "businessAccordion3.maturityLevelDescription"
        },
        {
          labelKey: "businessAccordion3.estimatedProcessDuration",
          descriptionKey: "businessAccordion3.estimatedProcessDurationDescription"
        },
        {
          labelKey: "businessAccordion3.typeOfInvestors",
          descriptionKey: "businessAccordion3.typeOfInvestorsDescription"
        },
        {
          labelKey: "businessAccordion3.preparationProgress",
          descriptionKey: "businessAccordion3.preparationProgressDescription"
        },
        {
          labelKey: "businessAccordion3.exclusivity",
          descriptionKey: "businessAccordion3.exclusivityDescription"
        },
        {
          labelKey: "businessAccordion3.marketConditions",
          descriptionKey: "businessAccordion3.marketConditionsDescription"
        }
      ]}
    />
  );
};

export default BusinessAccordion3;