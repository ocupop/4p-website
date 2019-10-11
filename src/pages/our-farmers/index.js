import React from 'react'
import FarmersIntro from './FarmersIntro'
import FeaturedFarm from '../../common/ui/FeaturedFarm'
import FarmersList from './FarmersList'
import { TryUsCTA } from '../../common/ui/CTAs'

const OurFarmers = () => {
  return (
    <>
      <section>
        <div className="container">
          <FarmersIntro />
          <FeaturedFarm />
          <FarmersList />
        </div>
      </section>
      <TryUsCTA />
    </>
  )
}

export default OurFarmers
