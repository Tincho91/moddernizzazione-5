import GenericAccordion from "@/app/components/GenericAccordion";

const BusinessAccordion = () => {
  return (
    <div>
      <GenericAccordion
        titleKey="businessAccordion.title"
        subtitleKey="businessAccordion.subtitle"
        items={[
          {
            labelKey: "businessAccordion.transparencyAndProfessionalism",
            descriptionKey: "businessAccordion.transparencyDescription"
          },
          {
            labelKey: "businessAccordion.evaluationCosts",
            descriptionKey: "businessAccordion.evaluationCostsDescription"
          },
          {
            labelKey: "businessAccordion.strategicPlanning",
            descriptionKey: "businessAccordion.strategicPlanningDescription"
          },
          {
            labelKey: "businessAccordion.dedicatedCommitment",
            descriptionKey: "businessAccordion.dedicatedCommitmentDescription"
          },
          {
            labelKey: "businessAccordion.riskMitigation",
            descriptionKey: "businessAccordion.riskMitigationDescription"
          },
          {
            labelKey: "businessAccordion.fundraisingStrategy",
            descriptionKey: "businessAccordion.fundraisingStrategyDescription"
          },
          {
            labelKey: "businessAccordion.ongoingCommitment",
            descriptionKey: "businessAccordion.ongoingCommitmentDescription"
          },
          {
            labelKey: "businessAccordion.accessToNetwork",
            descriptionKey: "businessAccordion.accessToNetworkDescription"
          },
          {
            labelKey: "businessAccordion.iterativeProcess",
            descriptionKey: "businessAccordion.iterativeProcessDescription"
          }
        ]}
      />
    </div>
  );
};

export default BusinessAccordion;