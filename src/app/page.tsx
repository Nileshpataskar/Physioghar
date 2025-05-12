'use client'
import Home from "@/components/home"
import { HeroBanner } from "@/components/sections/HeroBanner"
import WhatIsPhysioterapy from "@/components/sections/WhatIsPhysioterapy"

const Page = () => {
  return (
    <div>
      <HeroBanner />
      <WhatIsPhysioterapy />
      {/* <Home /> */}
    </div>
  )
}

export default Page