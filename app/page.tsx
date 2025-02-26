import React from 'react'

import Hero from './components/hero'
import FounderSection from './components/FounderSection'
import ServicesSection from './components/ServicesSection'
import InfoSection from './components/InfoSection'


const Home = () => {
  return (
    <>
      <Hero />
      <FounderSection />
      <ServicesSection />
      <InfoSection />
    </>
  )
}

export default Home