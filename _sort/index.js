import React from "react"
import { Link } from "gatsby"

import { TryUsCTA, StartShoppingCTA } from '../common/ui/CTAs'


import CommunityPicks from './home/CommunityPicks'

import FoodAccessIntro from './food-access-programs/FoodAccessIntro'

import FeaturedStore from "./home/FeaturedStore"
import HowItWorks from "./home/HowItWorks"
import Testimonials from './home/Testimonials'
import ImageBar from './home/ImageBar'
import EnrichYourself from './home/EnrichYourself'
import Community from './home/Community'



const IndexPage = () => (
  <>
    <section className="bg-primary">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-9 mx-lg-auto text-center">
            <p className="text-mega text-white">We believe in a world where <Link to="/our-impact" className="text-white text-underline">good food</Link> is the rule &mdash; not the exception.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="featured-collections">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h2>Featured Collections + Goods</h2>
            <p className="mb-5">Year-round, 4p delivers health, seasonal food from local family farms&mdash;all grown and harvested in the most responsible, sustainable way possible.</p>
          </div>
          <div className="col-lg-4 text-right">
            <a href="#" className="btn btn-primary">Start Shopping</a>
          </div>
        </div>
        <FeaturedStore />
      </div>
    </section>

    <HowItWorks />

    <StartShoppingCTA />

    <Testimonials />

    <ImageBar />


    <FoodAccessIntro />

    <EnrichYourself />

    <Community />

    <img src="https://via.placeholder.com/1800x600" className="img-fluid" alt="" />

    <TryUsCTA />

    <CommunityPicks />
  </>
)

export default IndexPage