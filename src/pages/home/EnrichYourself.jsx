import React from 'react'
import FeaturedWeeklyHarvest from '../4p-news/FeaturedWeeklyHarvest'
import FeaturedNews from '../4p-news/FeaturedNews'

function EnrichYourself() {
  return (
    <section id="featured-content">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 mx-lg-auto text-center">
            <h2>Enrich Yourself</h2>
            <p className="lead"><em>News, Recipes, Tips, and Home-grown Hype</em></p>
            <p>4P Foods sources farm-fresh food from farms in the Washington DC local foodshed and delivers them to your office or apartment building once a week.</p>
          </div>
        </div>
        <hr />
        <FeaturedWeeklyHarvest />
        <hr />
        <FeaturedNews/>
      </div>
    </section>
  )
}

export default EnrichYourself
