"use client";

import { useLanguage } from "@/app/LanguageContext";
import GenericTabs from "@/app/components/GenericTabs";

export default function StartupTabs() {
  const { t } = useLanguage();

  const tabs = [
    {
      id: "startupLegal",
      labelKey: "StartupTabs.startupLegalTitle",
      contentKey: "StartupTabs.startupLegalDescription",
    },
    {
      id: "financialStrategy",
      labelKey: "StartupTabs.financialStrategyTitle",
      contentKey: "StartupTabs.financialStrategyDescription",
    },
    {
      id: "fundraisingSupport",
      labelKey: "StartupTabs.fundraisingSupportTitle",
      contentKey: "StartupTabs.fundraisingSupportDescription",
    },
    {
      id: "capitalStructure",
      labelKey: "StartupTabs.capitalStructureTitle",
      contentKey: "StartupTabs.capitalStructureDescription",
    },
    {
      id: "growthScaling",
      labelKey: "StartupTabs.growthScalingTitle",
      contentKey: "StartupTabs.growthScalingDescription",
    },
    {
      id: "innovationDevelopment",
      labelKey: "StartupTabs.innovationDevelopmentTitle",
      contentKey: "StartupTabs.innovationDevelopmentDescription",
    },
  ];

  return (
    <GenericTabs
      tabs={tabs}
      titleKey="StartupTabs.title"
    />
  );
}