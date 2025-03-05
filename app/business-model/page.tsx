import BusinessAccordion from "./components/BusinessAccordion"
import BusinessAccordion2 from "./components/BusinessAccordion2"
import BusinessAccordion3 from "./components/BusinessAccordion3"
import BusinessHero from "./components/BusinessHero"

const page = () => {
  return (
    <>
      <BusinessHero />
      <BusinessAccordion />
      <BusinessAccordion2 />
      <BusinessAccordion3 />
    </>
  )
}

export default page