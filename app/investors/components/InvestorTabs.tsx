"use client";

import GenericTabs from "@/app/components/GenericTabs";

export default function InvestorTabs() {

  const tabs = [
    {
      id: "investorLegal",
      labelKey: "investorTabs.investorLegalTitle",
      contentKey: "investorTabs.investorLegalDescription",
    },
    {
      id: "financialStrategy",
      labelKey: "investorTabs.financialStrategyTitle",
      contentKey: "investorTabs.financialStrategyDescription",
    },
    {
      id: "fundraisingSupport",
      labelKey: "investorTabs.fundraisingSupportTitle",
      contentKey: "investorTabs.fundraisingSupportDescription",
    },
    {
      id: "capitalStructure",
      labelKey: "investorTabs.capitalStructureTitle",
      contentKey: "investorTabs.capitalStructureDescription",
    },
    {
      id: "growthScaling",
      labelKey: "investorTabs.growthScalingTitle",
      contentKey: "investorTabs.growthScalingDescription",
    },
  ];

  return (
    <GenericTabs
      tabs={tabs}
      titleKey="investorTabs.title"
    />
  );
}