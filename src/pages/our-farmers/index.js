import React from 'react'
import FarmersIntro from './FarmersIntro'
import FeaturedFarm from '../../common/ui/FeaturedFarm'
import FarmersList from './FarmersList'
import TryUs from '../../common/ui/TryUs'

const OurFarmers = () => {
  return (
    <>
      <section>
        <div className="container">
          <FarmersIntro/>
          <FeaturedFarm/>
          <FarmersList/>
        </div>
      </section>
      <TryUs/>
    </>
  )
}

export default OurFarmers
