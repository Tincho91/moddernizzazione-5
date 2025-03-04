"use client";

import React from 'react'
import StartupHero from './components/StartupHero'
import StartupAccordion from './components/StartupAccordion';
import StartupCallToAction from './components/StartupCallToAction';
import ServiceTabs from './components/StartupTabs';


const page = () => {
  return (
    <>
      <StartupHero />
      <StartupAccordion />
      <StartupCallToAction />
      <ServiceTabs />
    </>
  )
}

export default page