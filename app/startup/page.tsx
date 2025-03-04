"use client";

import React from 'react'
import StartupHero from './components/StartupHero'
import StartupAccordion from './components/StartupAccordion';
import StartupCallToAction from './components/StartupCallToAction';
import ServiceTabs from './components/StartupTabs';
import StartupCallToAction2 from './components/StartupCallToAction2';


const page = () => {
  return (
    <>
      <StartupHero />
      <StartupAccordion />
      <StartupCallToAction />
      <ServiceTabs />
      <StartupCallToAction2 />
    </>
  )
}

export default page