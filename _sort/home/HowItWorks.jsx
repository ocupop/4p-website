import React, { useState } from 'react'
import { Tab, Nav } from 'react-bootstrap'

const HowItWorks = () => {
  // const [key, setKey] = useState('home');
  return (
    <>
      <section id="how-it-works" className="pb-0">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2>How it works</h2>
              <h3>
                <em>Building Equitable Food Communities</em>
              </h3>
            </div>
          </div>
          <div className="row justify-content-between text-center">
            <div className="col-12 col-md-4">
              <div className="m-3 arrow arrow-right">
                <img src="/img/icons/orders.svg" alt="" className="img-fluid mx-4" />
                <h4>
                  <em>Farmers grow and harvest sustainable, healthy food</em>
                </h4>
                <p>
                  We work with more than 200 farmers for the best quality and variety. And the more we grow, the more we
                  give.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="m-3 arrow arrow-right">
                <img src="/img/icons/dropoff.svg" alt="" className="img-fluid mx-4" />
                <h4>
                  <em>Stroll through our online shop and customize your cart</em>
                </h4>
                <p>
                  Produce, dairy, or meat? Feeding a family of 6 or cooking for one? We have the food selection for you
                  to make everyone happy.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="m-3">
                <img src="/img/icons/food.svg" alt="" className="img-fluid mx-4" />
                <h4>
                  <em>Determine where you’d like your food dropped off</em>
                </h4>
                <p>
                  Save yourself the hassle of a trip to the store and set up delivery right to your door. Or pick one of
                  our community delivery sites to save yourself the delivery fee.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Tab.Container id="how-it-works" defaultActiveKey="farm">
          <div className="container">
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link eventKey="farm">Fresh from the farm</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="shopping">Start shopping</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="delivery">Delivered to you</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div className="bg-tan py-5">
            <Tab.Content className="container">
              <Tab.Pane eventKey="farm">
                <div className="row">
                  <div className="col-12 col-md-4">
                    <h4>
                      <i>Empowering Farmers</i>
                    </h4>
                    <p>
                      4P currently empowers more than 200 local family farms to put their high quality produce, meat,
                      and dairy products on more tables every day.
                    </p>
                    <h4 className="mt-4">
                      <i>Committed to our Planet</i>
                    </h4>
                    <p>
                      4P Foods works with farmers who are committed to low-impact, sustainable methods of production.
                      Plus, local food requires less travel, improving your carbon footprint.
                    </p>
                    <a href="" className="btn btn-primary mt-4">
                      Learn More
                    </a>
                  </div>
                  <div className="col-12 col-md-8 overflow-hidden">
                    <div className="d-flex">
                      <img src="https://via.placeholder.com/600x400/99BB00/99BB00" alt="" />
                      <img src="https://via.placeholder.com/600x400/990000/990000" alt="" />
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="shopping">
                <div className="row">
                  <div className="col-12 col-md-4">
                    <h4>Empowering Farmers</h4>
                  </div>
                  <div className="col-12 col-md-4">
                    <img src="" alt="" />
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="delivery">
                <div className="row">
                  <div className="col-12 col-md-4">
                    <h4>Empowering Farmers</h4>
                  </div>
                  <div className="col-12 col-md-4">
                    <img src="" alt="" />
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </div>
        </Tab.Container>
      </section>
    </>
  )
}

export default HowItWorks
