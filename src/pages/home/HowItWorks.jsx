import React, { useState } from 'react'
import {Tabs, Tab} from 'react-bootstrap'

const HowItWorks = () => {
  const [key, setKey] = useState('home');
  return (
    <>
      <div className="row">
        <div className="col-12 text-center">
          <h2>How it works</h2>
          <h3><em>Building Equitable Food Communities</em></h3>
        </div>
      </div>
      <div className="row justify-content-between text-center">
        <div className="col-12 col-md-4">
          <div className="m-3 arrow arrow-right">
            <img src="/img/icons/orders.svg" alt="" className="img-fluid mx-4" />
            <h4><em>Farmers grow and harvest sustainable, healthy food</em></h4>
            <p>We work with more than 200 farmers for the best quality and variety. And the more we grow, the more we give.</p>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="m-3 arrow arrow-right">
            <img src="/img/icons/dropoff.svg" alt="" className="img-fluid mx-4" />
            <h4><em>Stroll through our online shop and customize your cart</em></h4>
            <p>Produce, dairy, or meat? Feeding a family of 6 or cooking for one? We have the food selection for you to make everyone happy.</p>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="m-3">
            <img src="/img/icons/food.svg" alt="" className="img-fluid mx-4" />
            <h4><em>Determine where you’d like your food dropped off</em></h4>
            <p>Save yourself the hassle of a trip to the store and set up delivery right to your door. Or pick one of our community delivery sites to save yourself the delivery fee.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
            <Tab eventKey="farm" title="Fresh from the farm">
              <div className="row">
                <div className="col-12 col-md-4">
                  <h4>Empowering Farmers</h4>
                </div>
                <div className="col-12 col-md-4">
                  <img src="" alt=""/>
                </div>
              </div>
            </Tab>
            <Tab eventKey="shopping" title="Start Shopping">
              <div className="row">
                <div className="col-12 col-md-4">
                  <h4>Empowering Farmers</h4>
                </div>
                <div className="col-12 col-md-4">
                  <img src="" alt="" />
                </div>
              </div>
            </Tab>
            <Tab eventKey="delivery" title="Delivered To You" disabled>
              <div className="row">
                <div className="col-12 col-md-4">
                  <h4>Empowering Farmers</h4>
                </div>
                <div className="col-12 col-md-4">
                  <img src="" alt="" />
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  )
}

export default HowItWorks