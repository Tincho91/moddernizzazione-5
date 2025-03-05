"use client";

import GenericTabs from "@/app/components/GenericTabs";

export default function InvestorTabs() {
  const tabs = [
    {
      id: "startupEvaluation",
      labelKey: "investorTabs.startupEvaluationTitle",
      contentKey: "investorTabs.startupEvaluationDescription",
    },
    {
      id: "dealNegotiation",
      labelKey: "investorTabs.dealNegotiationTitle",
      contentKey: "investorTabs.dealNegotiationDescription",
    },
    {
      id: "portfolioOptimization",
      labelKey: "investorTabs.portfolioOptimizationTitle",
      contentKey: "investorTabs.portfolioOptimizationDescription",
    },
    {
      id: "networkingOpportunities",
      labelKey: "investorTabs.networkingOpportunitiesTitle",
      contentKey: "investorTabs.networkingOpportunitiesDescription",
    },
    {
      id: "termSheetStudy",
      labelKey: "investorTabs.termSheetStudyTitle",
      contentKey: "investorTabs.termSheetStudyDescription",
    },
  ];

  return <GenericTabs tabs={tabs} titleKey="investorTabs.title" />;
}