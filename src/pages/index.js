import React from "react"
import { Link } from "gatsby"
import HEAD from "../common/ui/head"

import { TryUsCTA, StartShoppingCTA } from '../common/ui/CTAs'

import FeaturedWeeklyHarvest from '../common/ui/FeaturedWeeklyHarvest'
import FeaturedNewsItem from '../common/ui/FeaturedNewsItem'

import CommunityPicks from '../common/ui/CommunityPicks'
import FoodAccessIntro from './food-access-programs/FoodAccessIntro'

import FeaturedStore from "./home/FeaturedStore"
import HowItWorks from "./home/HowItWorks"
import Testimonials from './home/Testimonials'
import ImageBar from './home/ImageBar'



const IndexPage = () => (
  <>
    <HEAD title="Home" />

    <section className="bg-primary">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-10 mx-lg-auto text-center">
            <p className="h1 text-white">We believe in a world where <Link to="/our-impact">Good Food</Link> is the rule&mdash;not the exception.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="featured-collections">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h2>Featured Collections + Goods</h2>
            <p>Year-round, 4p delivers health, seasonal food from local family farms&mdash;all grown and harvested in the most responsible, sustainable way possible.</p>
          </div>
          <div className="col-lg-4">
            <a href="#" className="btn btn-primary">Start Shopping</a>
          </div>
        </div>
        <FeaturedStore />
      </div>
    </section>

    <section id="how-it-works">
      <div className="container">
        <HowItWorks />
      </div>
    </section>

    <StartShoppingCTA />

    <section id="testimonials" className="bg-primary text-white">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4 className="text-white">Stories of Satisfied Customers</h4>
            <Testimonials />
          </div>
        </div>
      </div>
    </section>

    <ImageBar />

    <section id="food-access-programs" className="bg-gray-600 text-white">
      <div className="container">
        <FoodAccessIntro />
      </div>
    </section>

    <section id="featured-content">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 mx-lg-auto text-center">
            <h2>Enrich Yourself</h2>
            <p>News, Recipes, Tips, and Home-grown Hype</p>
            <p>4P Foods sources farm-fresh food from farms in the Washington DC local foodshed and delivers them to your office or apartment building once a week.</p>
          </div>
        </div>
        <hr />
        <FeaturedWeeklyHarvest />
        <hr />
        <div className="row">
          <div className="col-lg-6">
            <h3>Featured 4P News</h3>
          </div>
          <div className="col-lg-6 text-lg-right">
            <a href="#" className="btn btn-primary">Explore 4P News</a>
          </div>
        </div>
        <FeaturedNewsItem />
      </div>
    </section>

    <section id="bring-us-to-your-community" className="bg-primary text-white">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 mx-lg-auto text-center">
            <h3 className="text-white">Bring 4p to your community</h3>
            <p>Supportive Sub-Headline Here</p>
            <p>4p Foods sources farm-fresh food from farms in the Washington DC local foodshed and delivers them to your office or apartment building once each week.</p>
          </div>
        </div>
        <div className="responsive-card-deck cards-lg-4 cards-md-2">
          <div className="card bg-transparent text-center">
            <img src="https://via.placeholder.com/500x350" className="img-fluid" alt="" />
            <div className="card-body p-0">
              <h5 className="text-white my-3">Your<br className="d-none d-lg-block" />Office</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quam quod error fugiat veritatis dicta soluta dolore? Perspiciatis sed obcaecati</p>
            </div>
            <div className="card-footer bg-transparent">
              <a href="#" className="btn btn-green-dark">See Newsletter</a>
            </div>
          </div>
          <div className="card bg-transparent text-center">
            <img src="https://via.placeholder.com/500x350" className="img-fluid" alt="" />
            <div className="card-body p-0">
              <h5 className="text-white my-3">Your<br className="d-none d-lg-block" />Office</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quam quod error fugiat veritatis dicta soluta dolore? Perspiciatis sed obcaecati</p>
            </div>
            <div className="card-footer bg-transparent">
              <a href="#" className="btn btn-green-dark">See Newsletter</a>
            </div>
          </div>
          <div className="card bg-transparent text-center">
            <img src="https://via.placeholder.com/500x350" className="img-fluid" alt="" />
            <div className="card-body p-0">
              <h5 className="text-white my-3">Your<br className="d-none d-lg-block" />Office</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quam quod error fugiat veritatis dicta soluta dolore? Perspiciatis sed obcaecati</p>
            </div>
            <div className="card-footer bg-transparent">
              <a href="#" className="btn btn-green-dark">See Newsletter</a>
            </div>
          </div>
          <div className="card bg-transparent text-center">
            <img src="https://via.placeholder.com/500x350" className="img-fluid" alt="" />
            <div className="card-body p-0">
              <h5 className="text-white my-3">Your<br className="d-none d-lg-block" />Office</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quam quod error fugiat veritatis dicta soluta dolore? Perspiciatis sed obcaecati</p>
            </div>
            <div className="card-footer bg-transparent">
              <a href="#" className="btn btn-green-dark">See Newsletter</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <img src="https://via.placeholder.com/1800x600" className="img-fluid" alt="" />

    <TryUsCTA />

    <CommunityPicks />
  </>
)

export default IndexPage