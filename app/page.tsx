"use client"

import React from 'react'

import FounderSection from './components/FounderSection'
import ServicesSection from './components/ServicesSection'
import InfoSection from './components/InfoSection'
import Hero from './components/Hero'


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