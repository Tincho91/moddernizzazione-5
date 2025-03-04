"use client";

import React from 'react'
import StartupHero from './components/StartupHero'
import StartupInfoSection from './components/StartupInfoSection';
import StartupCallToAction from './components/StartupCallToAction';
import ServiceTabs from './components/StartupTabs';


const page = () => {
  return (
    <>
      <StartupHero />
      <StartupInfoSection />
      <StartupCallToAction />
      <ServiceTabs />
    </>
  )
}

export default page