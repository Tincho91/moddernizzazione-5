"use client";

import CallToAction from "@/app/components/GenericCallToAction";

export default function StartupCallToAction() {
  return (
    <CallToAction
      titleKey="callToAction.text3"
      textKeys={["callToAction.text1", "callToAction.text2", "callToAction.text4"]}
      buttonKey="callToAction.button"
    />
  );
}
