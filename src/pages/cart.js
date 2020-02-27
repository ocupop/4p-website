import React from 'react'
// import PropTypes from 'prop-types'
import Cart from '../features/cart'
import FeaturedProducts from '../features/product/FeaturedProducts'

const CartPage = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-md-flex align-items-center justify-content-between">
                <h1 className="d-md-inline-block">Your cart</h1>
                <div className="delivery-details d-md-flex align-items-center">
                  <span className="text-uppercase">
                    Your next delivery
                    <strong className="ml-md-2"> Saturday 2/29</strong>
                  </span>
                  <a href="#">
                    <small>
                      Edit Delivery
                      <br />
                      Schedule
                    </small>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <Cart />
          <hr />
          <FeaturedProducts />
        </div>
      </section>
    </>
  )
}

CartPage.propTypes = {}

export default CartPage
