import GenericAccordion from "@/app/components/GenericAccordion";

const BusinessAccordion = () => {
  return (
    <div>
      <GenericAccordion
        titleKey="businessAccordion.title"
        subtitleKey="businessAccordion.subtitle"
        items={[
          {
            labelKey: "businessAccordion.retainerFeeVariables",
            descriptionKey: "businessAccordion.retainerFeeVariablesDescription"
          },
          {
            labelKey: "businessAccordion.successFeeTitle",
            descriptionKey: "businessAccordion.successFeeDescription"
          },

        ]}
      />
    </div>
  );
};

export default BusinessAccordion;