"use client";

import CallToAction from "@/app/components/GenericCallToAction";

export default function StartupCallToAction() {
  return (
    <CallToAction
      titleKey="startupCallToAction.visionTitle"
      textKeys={[
        "startupCallToAction.financialChallenges",
        "startupCallToAction.strategicSolutions",
        "startupCallToAction.contactPrompt"
      ]}
      buttonKey="startupCallToAction.contactButton"
    />
  );
}