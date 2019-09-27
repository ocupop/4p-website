import React from "react"
import { Link } from "gatsby"
import Image from "../common/ui/image"
import HEAD from "../common/ui/head"
import FeaturedCollections from "./home/featuredCollections"
import HowItWorks from "./home/HowItWorks"
import HomeTabs from "./home/HomeTabs"
import StartShopping from '../common/ui/StartShopping'
import HomeTestimonials from './home/HomeTestimonials'
import ImageBar from './home/ImageBar'
import FoodAccessPrograms from './home/FoodAccessPrograms'
import FeaturedWeeklyHarvest from '../common/ui/FeaturedWeeklyHarvest'
import FeaturedNews from '../common/ui/FeaturedNews'
import Bring4p from './home/Bring4p'
import TryUs from '../common/ui/TryUs'
import CommunityPicks from '../common/ui/CommunityPicks'


const IndexPage = () => (
  <>
    <HEAD title="Home" />
    <section className="bg-primary">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-10 mx-lg-auto text-center">
            <h1 className="text-white">We believe in a world where <Link to="/our-impact">Good Food</Link> is the rule&mdash;not the exception.</h1>
          </div>
        </div>
      </div>
    </section>
    <FeaturedCollections/>
    <HowItWorks/>
    <HomeTabs/>
    <StartShopping/>
    <HomeTestimonials/>
    <ImageBar/>
    <FoodAccessPrograms/>
    <section>
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
        <hr/>
        <FeaturedNews />
      </div>
    </section>
    <Bring4p/>
    <img src={"https://via.placeholder.com/1800x600"} className="img-fluid" alt=""/>
    <TryUs/>
    <CommunityPicks/>
  </>
)

export default IndexPage