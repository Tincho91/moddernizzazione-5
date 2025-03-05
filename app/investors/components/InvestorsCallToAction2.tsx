"use client";

import CallToAction from "@/app/components/GenericCallToAction";

export default function InvestorsCallToAction2() {
  return (
    <CallToAction
      titleKey="InvestorsCallToAction2.text3"
      textKeys={["InvestorsCallToAction2.text1", "InvestorsCallToAction2.text2"]}
      buttonKey="InvestorsCallToAction2.button"
    />
  );
}