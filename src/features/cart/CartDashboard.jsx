import React from 'react'
// import PropTypes from 'prop-types'
import CartList from './CartList'

import {CART_DATA} from '../../common/data/CART_DATA'

const CartDashboard = () => {
  const { cartItems , cartTotal } = CART_DATA

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <div className="cart-header d-flex align-items-center justify-content-between">
                  <h1 className="d-lg-inline-block">Your cart</h1>
                  <div className="delivery-details d-flex align-items-center">
                    <span className="text-uppercase">
                      Your next delivery
                      <strong>Wednesday 12/19</strong>
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
          </div>
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="content">
                <h2>Your Weekly Delivery</h2>
                <p>
                  Delivery copy Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Aperiam, quos?
                </p>
              </div>
            </div>
          </div>
        </div>
        <button type="button" className="btn btn-primary">{cartTotal}</button>
        <hr />
        <CartList items={cartItems} />
      </section>
    </>
  )
}

CartDashboard.propTypes = {

}

export default CartDashboard
