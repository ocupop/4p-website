import React from 'react'
import FeaturedNewsItem from '../../common/ui/FeaturedNewsItem'
import NewsCards from './NewsCards'
import NewsNav from './NewsNav'
import { TryUsCTA } from '../../common/ui/CTAs'
import NewsLetterCards from './NewsLetterCards'

const News = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8 mx-lg-auto text-center">
              <h1>Enrich Yourself</h1>
              <p className="lead">News, Recipes, Tips, and Home-grown Hype</p>
              <p>4p Foods sources farm-fresh food from farms in the Washington DC local foodshed and delivers them to your office or apartment building once each week.</p>
            </div>
          </div>
          <hr />
        </div>
      </section>
      <section className="pt-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <NewsNav />
            </div>
          </div>
          <FeaturedNewsItem />
          <div className="row">
            <div className="col-12">
              <NewsCards />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Weekly Harvest Newsletters (needs to be incorporated into nav)</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <NewsLetterCards />
            </div>
          </div>
        </div>
      </section>
      <img src="https://via.placeholder.com/1800x600" className="img-fluid" alt="" />
      <TryUsCTA />

    </>
  )
}

export default News
