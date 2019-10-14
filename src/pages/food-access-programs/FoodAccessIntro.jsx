import React from 'react'

const FoodAccessIntro = () => {
  return (
    <section id="food-access-programs" className="bg-gray-600 text-white">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 col-lg-11 mx-lg-auto text-center">
            <h2 className="text-white">Food Access Programs</h2>
            <p className="lead"><em>4P fights to build a better food system that enables all people, regardless of income or ZIP code, to have access to good, healthy food.</em></p>
            <p>Food Access (or lack thereof) is a multi-pronged problem touching on the areas of geography, financial, and personal. 4P Foods, together with our partners, helps to deliver food along with solutions that mirror those challenges.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-4 text-center">
            <div className="row align-items-center mb-5">
              <div className="col-12 col-sm-4 col-lg-12">
                <div className="px-lg-5 ml-auto mx-lg-4 py-lg-4">
                  <img src="/img/icons/homepage-foodaccess-geographic.png" className="img-fluid w-75" alt="" />
                </div>
              </div>
              <div className="col-12 col-sm-7 col-lg-12 text-sm-left text-lg-center">
                <h4 className="text-white">Geographic</h4>
                <p className="px-lg-5">The geographic access challenge is availability to resources for Good Food. For examples, no grocery stores within a reasonable distance.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 text-center">
            <div className="row align-items-center mb-5">
              <div className="col-12 col-sm-4 col-lg-12">
                <div className="px-lg-5 ml-auto mx-lg-4 py-lg-4">
                  <img src="/img/icons/homepage-foodaccess-financial.png" className="img-fluid w-75" alt="" />
                </div>
              </div>
              <div className="col-12 col-sm-7 col-lg-12 text-sm-left text-lg-center">
                <h4 className="text-white">Financial</h4>
                <p className="px-lg-5">The financial access challenge of earning enough money for Good Food. Even if there is a grocery store, healthy fresh produce is often a luxury</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center">
            <div className="row align-items-center mb-5">
              <div className="col-12 col-sm-4 col-lg-12">
                <div className="px-lg-5 ml-auto mx-lg-4 py-lg-4">
                  <img src="/img/icons/homepage-foodaccess-personal.png" className="img-fluid w-75" alt="" />
                </div>
              </div>
              <div className="col-12 col-sm-7 col-lg-12 text-sm-left text-lg-center">
                <h4 className="text-white">Personal</h4>
                <p className="px-lg-5">The personal access challenge is about lifestyle limitations. For example, someone working multiple jobs may not have the time, tools or knowledge to buy and prepare healthy food.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <a href="/food-access-programs" className="btn btn-primary btn-lg mt-5">Find out more</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FoodAccessIntro
