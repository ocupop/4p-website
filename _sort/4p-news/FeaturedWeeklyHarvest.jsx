import React from 'react'
import FeaturedWeeklyHarvestItem from './FeaturedWeeklyHarvestItem'

const FeaturedWeeklyHarvest = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-6">
          <h3>Featured Weekly Harvest</h3>
        </div>
        <div className="col-lg-6 text-lg-right">
          <a href="#" className="btn btn-primary">Explore Newsletters</a>
        </div>
      </div>

      <div className="threesome mt-4">
        <FeaturedWeeklyHarvestItem/>
        <FeaturedWeeklyHarvestItem />
        <FeaturedWeeklyHarvestItem />
      </div>
    </>
  )
}

export default FeaturedWeeklyHarvest
