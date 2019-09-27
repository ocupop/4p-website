import React from 'react'
import ImpactTabs from './ImpactTabs'

const OurImpact = () => {
  return (
    <>
      <div className="d-flex">
        <span>
          <img src={"https://via.placeholder.com/500x350"} className="img-fluid p-1" alt="" />
        </span>
        <span>
          <img src={"https://via.placeholder.com/500x350"} className="img-fluid p-1" alt="" />
        </span>
        <span>
          <img src={"https://via.placeholder.com/500x350"} className="img-fluid p-1" alt="" />
        </span>
      </div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-lg-auto text-center">
              <h1>Good Food Made Easy</h1>
              <p className="lead">4P Foods is part of the rapidly-growing alternative food system focused on health, long-term sustainability, and Good Food</p>
              <p>To us, good food is more than local, it is: transparently sourced, nourishing to both body and mind, ethically raised, and harvested in an environmentally concious way. Most of all, good food is equitably accessible to all people, regardless of who they are or where they live.</p>
            </div>
          </div>
        </div>
      </section>
      <ImpactTabs/>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2>Our impact so far</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 text-center">
              <img src={"https://via.placeholder.com/150"} className="img-fluid mb-4" alt="" />
              <p><strong>212+</strong> independent, family farmers supported by 4P Foods throughout the east coast.</p>
            </div>
            <div className="col-lg-4 text-center">
              <img src={"https://via.placeholder.com/150"} className="img-fluid mb-4" alt="" />
              <p>Over <strong>100,000 lbs</strong> of Good Food delivered into underserved communities in our national region.</p>
            </div>
            <div className="col-lg-4 text-center">
              <img src={"https://via.placeholder.com/150"} className="img-fluid mb-4" alt="" />
              <p><strong>290+ families</strong> served through our Fresh Farmacy produce prescription program in Charlottesville.</p>
            </div>
          </div>
        </div>
      </section>
      <div className="d-flex">
        <span>
          <img src={"https://via.placeholder.com/500x350"} className="img-fluid p-1" alt="" />
        </span>
        <span>
          <img src={"https://via.placeholder.com/500x350"} className="img-fluid p-1" alt="" />
        </span>
        <span>
          <img src={"https://via.placeholder.com/500x350"} className="img-fluid p-1" alt="" />
        </span>
      </div>
      <section class="bg-gray-600">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8 mx-lg-auto text-center text-white">
              <h2 className="text-white">Food Access Programs</h2>
              <p>4P fights to build a better food system that enables all people, regardless of income or ZIP code, to have access to good, healthy food.</p>
              <a href="#" className="btn btn-primary">Find out more</a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <img src={"/img/4p-foods-cmyk-logo-color-color.png"} className="img-fluid" alt="4P Foods logo"/>
            </div>
            <div className="col-lg-8">
              <h4>Our name stands for the 4 P's we think should be a part of every business</h4>
              <p class="lead text-primary">Purpose, People, Planet and Prosperity</p>
              <p>Purpose means that we constantly strive to advance our mission &mdash; ensuring that all people can eat Good Food and all farmers can make a living growing Good Food.</p>
              <p>People means that we aim to positively impact everyone who interacts with our business, from the customers we feed to the staff we support and cultivate.</p>
              <p>Planet means that we carefully manage our natural resources and work with farmers who use regenerative agricultural practices to do the same, simultaneously fixing existing problems while proactively</p>
              <p>Prosperity means that we commit to running a viable business for the long-term, so that we can continue to pay fair prices to our farmers and good wages to our staff.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-teal">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurImpact
