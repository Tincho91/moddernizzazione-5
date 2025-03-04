import React from 'react'
import InvestorsHero from './components/InverstorsHero'
import InvestorsAccordion from './components/InvestorsAccordion'
import InvestorsCallToAction from './components/InvestorsCallToAction'
import InvestorTabs from './components/InvestorTabs'
import InvestorsCallToAction2 from './components/InvestorsCallToAction2'

const page = () => {
  return (
    <>
      <InvestorsHero />
      <InvestorsAccordion />
      <InvestorsCallToAction />
      <InvestorTabs />
      <InvestorsCallToAction2 />
    </>
  )
}

export default page