"use client";

import CallToAction from "@/app/components/GenericCallToAction";

export default function InvestorsCallToAction() {
  return (
    <CallToAction
      titleKey="investorsCallToAction.title"
      textKeys={[
        "investorsCallToAction.text1",
        "investorsCallToAction.text2"
      ]}
      buttonKey="investorsCallToAction.button"
    />
  );
}