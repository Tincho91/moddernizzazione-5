import GenericAccordion from "@/app/components/GenericAccordion";

const BusinessAccordion3 = () => {
  return (
    <GenericAccordion
      titleKey="businessAccordion3.title"
      subtitleKey="businessAccordion3.subtitle"
      items={[
        {
          labelKey: "businessAccordion3.fundraisingAmountAndRisk",
          descriptionKey: "businessAccordion3.fundraisingAmountAndRiskDescription"
        },
        {
          labelKey: "businessAccordion3.industryAndMaturity",
          descriptionKey: "businessAccordion3.industryAndMaturityDescription"
        },
        {
          labelKey: "businessAccordion3.processDurationAndInvestors",
          descriptionKey: "businessAccordion3.processDurationAndInvestorsDescription"
        },
        {
          labelKey: "businessAccordion3.preparationAndExclusivity",
          descriptionKey: "businessAccordion3.preparationAndExclusivityDescription"
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