"use client";

import AdvisorsCallToAction from "./components/AdvisorsCallToAction"
import AdvisorsHero from "./components/AdvisorsHero";
import AdvisorsTabs from "./components/AdvisorsTabs"

const page = () => {
  return (
    <>
      <AdvisorsHero />
      <AdvisorsTabs />
      <AdvisorsCallToAction />
    </>
  )
}

export default page