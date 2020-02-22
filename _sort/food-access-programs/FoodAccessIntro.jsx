import React from 'react'
import { Card } from 'react-bootstrap'

const FoodAccessIntro = () => {
  const iconStyle = {
    maxWidth: '100px',
    width: '100px'
  }
  return (
    <section id="FoodAccessIntro" className="bg-mid text-white">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 col-lg-11 mx-lg-auto text-center">
            <h2 className="text-white">Food Access Programs</h2>
            <p className="lead">
              <em>
                4P fights to build a better food system that enables all people, regardless of income or ZIP code, to
                have access to good, healthy food.
              </em>
            </p>
            <p>
              Food Access (or lack thereof) is a multi-pronged problem touching on the areas of geography, financial,
              and personal. 4P Foods, together with our partners, helps to deliver food along with solutions that mirror
              those challenges.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="threesome">
              <Card className="bg-transparent">
                <div className="card-content align-items-center">
                  <div className="card-header p-0">
                    <div className="content">
                      <img src="/img/icons/homepage-foodaccess-geographic.png" style={iconStyle} alt="" />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="content">
                      <h4 className="text-white">Geographic</h4>
                      <p className="px-lg-5">
                        The geographic access challenge is availability to resources for Good Food. For examples, no
                        grocery stores within a reasonable distance.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="bg-transparent">
                <div className="card-content align-items-center">
                  <div className="card-header p-0">
                    <div className="content">
                      <img src="/img/icons/homepage-foodaccess-financial.png" style={iconStyle} alt="" />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="content">
                      <h4>Financial</h4>
                      <p>
                        The financial access challenge of earning enough money for Good Food. Even if there is a grocery
                        store, healthy fresh produce is often a luxury
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="bg-transparent">
                <div className="card-content align-items-center">
                  <div className="card-header p-0">
                    <div className="content">
                      <img src="/img/icons/homepage-foodaccess-personal.png" style={iconStyle} alt="" />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="content">
                      <h4>Personal</h4>
                      <p>
                        The personal access challenge is about lifestyle limitations. For example, someone working
                        multiple jobs may not have the time, tools or knowledge to buy and prepare healthy food.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <a href="/food-access-programs" className="btn btn-primary btn-lg mt-5">
              Find out more
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FoodAccessIntro
