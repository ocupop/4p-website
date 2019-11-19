import React from 'react'
import { Card } from 'react-bootstrap'

function Community() {
  return (
    <section id="bring-us-to-your-community" className="bg-primary text-white">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 mx-lg-auto text-center">
            <h2>Bring 4p to your community</h2>
            <p className="lead"><em>Supportive Sub-Headline Here</em></p>
            <p>4p Foods sources farm-fresh food from farms in the Washington DC local foodshed and delivers them to your office or apartment building once each week.</p>
          </div>
        </div>
        <div className="foursome mt-5">
          <Card>
            <div className="card-content pin-footer">
              <div className="card-header">
                <div className="content">
                  <img src="/img/icons/4p-homepage-youroffice.png" alt="" />
                </div>
              </div>
              <div className="card-body">
                <div className="content">
                  <h4>Your Office</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione praesentium veritatis at error fuga magni labore cum iusto, natus obcaecati recusandae, fugiat voluptatibus reprehenderit laborum ex magnam molestiae? Sit, omnis!</p>
                </div>
              </div>
              <div className="card-footer">
                <p><a href="/" className="btn btn-green btn-block">Learn More</a></p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="card-content pin-footer">
              <div className="card-header">
                <div className="content">
                  <img src="/img/icons/4p-homepage-yourbuilding.png" alt="" />
                </div>
              </div>
              <div className="card-body">
                <div className="content">
                  <h4>Your Building</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione praesentium veritatis at error fuga magni labore cum iusto, natus obcaecati recusandae, fugiat voluptatibus reprehenderit laborum ex magnam molestiae? Sit, omnis!</p>
                </div>
              </div>
              <div className="card-footer">
                <p><a href="/" className="btn btn-green btn-block">Learn More</a></p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="card-content pin-footer">
              <div className="card-header">
                <div className="content">
                  <img src="/img/icons/4p-homepage-yourcommunity.png" alt="" />
                </div>
              </div>
              <div className="card-body">
                <div className="content">
                  <h4>Your Community</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione praesentium veritatis at error fuga magni labore cum iusto, natus obcaecati recusandae, fugiat voluptatibus reprehenderit laborum ex magnam molestiae? Sit, omnis!</p>
                </div>
              </div>
              <div className="card-footer">
                <p><a href="/" className="btn btn-green btn-block">Learn More</a></p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="card-content pin-footer">
              <div className="card-header">
                <div className="content">
                  <img src="/img/icons/4p-homepage-yourbusiness.png" alt="" />
                </div>
              </div>
              <div className="card-body">
                <div className="content">
                  <h4>Your Business</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione praesentium veritatis at error fuga magni labore cum iusto, natus obcaecati recusandae, fugiat voluptatibus reprehenderit laborum ex magnam molestiae? Sit, omnis!</p>
                </div>
              </div>
              <div className="card-footer">
                <p><a href="/" className="btn btn-green btn-block">Learn More</a></p>
              </div>
            </div>
          </Card>

        </div>
      </div>
    </section>
  )
}

export default Community
