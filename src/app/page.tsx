'use client'
import { Appointement } from "@/components/sections/Appointement"
import { Contact } from "@/components/sections/Contact"
import OurCoreValues from "@/components/sections/CoreValues"
import FirstVisit from "@/components/sections/FirstVisit"
import Footer from "@/components/sections/Footer"
import Header from "@/components/sections/Header"
import { HeroBanner } from "@/components/sections/HeroBanner"
// import ModeOfCare from "@/components/sections/ModeOfCare"
import StickyPhone from "@/components/sections/StickyPhone"
import TreatmentCategories from "@/components/sections/TreatmentCategories"
import { Vision } from "@/components/sections/Vision"
import WhatIsPhysioterapy from "@/components/sections/WhatIsPhysioterapy"

const Page = () => {
  return (  
    <div>
      <Header />
      <HeroBanner />
      <WhatIsPhysioterapy />
      <Vision />
      <OurCoreValues />
      {/* <ModeOfCare /> */}
      <TreatmentCategories />
      <FirstVisit />
      <Appointement />
      <Contact />
      <Footer />
      <StickyPhone />
      {/* <Home /> */}
    </div>
  )
}

export default Page