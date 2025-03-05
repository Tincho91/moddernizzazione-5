"use client";

import GenericTabs from "@/app/components/GenericTabs";

export default function AdvisorsTabs() {
  const tabs = [
    {
      id: "startupEvaluation",
      labelKey: "advisorsTabs.startupEvaluationTitle",
      contentKey: "advisorsTabs.startupEvaluationDescription",
    },
    {
      id: "dealNegotiation",
      labelKey: "advisorsTabs.dealNegotiationTitle",
      contentKey: "advisorsTabs.dealNegotiationDescription",
    },
    {
      id: "portfolioOptimization",
      labelKey: "advisorsTabs.portfolioOptimizationTitle",
      contentKey: "advisorsTabs.portfolioOptimizationDescription",
    },
    {
      id: "networkingOpportunities",
      labelKey: "advisorsTabs.networkingOpportunitiesTitle",
      contentKey: "advisorsTabs.networkingOpportunitiesDescription",
    },
    {
      id: "termSheetStudy",
      labelKey: "advisorsTabs.termSheetStudyTitle",
      contentKey: "advisorsTabs.termSheetStudyDescription",
    },
  ];

  return <GenericTabs tabs={tabs} titleKey="advisorsTabs.title" />;
}