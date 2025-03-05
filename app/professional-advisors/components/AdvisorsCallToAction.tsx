"use client";

import CallToAction from "@/app/components/GenericCallToAction";

export default function AdvisorsCallToAction() {
  return (
    <CallToAction
      titleKey="advisorsCallToAction.title"
      textKeys={[
        "advisorsCallToAction.text1",
        "advisorsCallToAction.text2"
      ]}
      buttonKey="advisorsCallToAction.button"
    />
  );
}