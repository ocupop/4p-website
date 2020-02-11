import React from 'react'
import PropTypes from 'prop-types'

const BagDetails = ({bag}) => {
  console.log(bag);
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content">
                <h2>{ bag.name }</h2>
                <p className="font-family-serif">{ bag.description }</p>
                <div className="styled-select">
                  <select name="" id="" placeholder="Choose Size">
                    <option value="">Option value 1</option>
                    <option value="">Option value 2</option>
                    <option value="">Option value 3</option>
                  </select>
                </div>
                <div className="product-price my-3">$0.00 - $0.00</div>
                <div className="d-flex">
                  <button className="product-button w-50">
                    Weekly<br />
                    Delivery
                  </button>
                  <button className="product-button w-50">
                    One-Time<br />
                    Purchase
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <div className="bg-image aspect-4x3"
                  style={{
                    backgroundImage: `url(https://via.placeholder.com/768x500)`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="content">
                <h2>Good Food</h2>
                <p className="font-family-serif">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, excepturi!</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="content">
                <h2>Mix and Match</h2>
                <p className="font-family-serif">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, excepturi!</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="content">
                <h2>Skip Anytime</h2>
                <p className="font-family-serif">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, excepturi!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h2>Previous Deliveries</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {/* TODO loop through previous deliveries */}

            <div className="col-lg-3">
              <div className="content">
                <a href="#" className="bg-image aspect-4x3"
                  style={{
                    backgroundImage: `url(https://via.placeholder.com/768x500)`,
                  }}>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* TODO is 'this weeks goods' section from the design still relevant in this view */}
      {/* <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h2>This week's goods</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <div className="content">
                    <div className="bg-image aspect-4x3"
                      style={{
                        backgroundImage: `url(https://via.placeholder.com/768x500)`,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="content">
                    <h3 className="h2">Product Name</h3>
                    <span className="text-uppercase">product size / amount</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* TODO need to include 'we recommend' products section */}
    </>
  )
}

BagDetails.propTypes = {
  bag: PropTypes.instanceOf(Object)
}

export default BagDetails
