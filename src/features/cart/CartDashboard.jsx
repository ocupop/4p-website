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
                <div className="d-flex align-items-center justify-content-between">
                  <h1 className="d-lg-inline-block">Your cart</h1>
                  <div className="delivery-details d-flex align-items-center">
                    <span className="text-uppercase">
                      Your next delivery
                      <strong class="ml-2">Wednesday 12/19</strong>
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
          <hr className="row-border"/>
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
          <CartList items={cartItems} />
          <hr className="row-border" />
          <div className="row">
            <div className="col-lg-6 ml-lg-auto">
              <div className="content">
                <div className="form-group row align-items-center">
                  <label htmlFor="input-coupon-code" className="col-sm-2 col-form-label">Coupon Code</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="input-coupon-code"/>
                  </div>
                </div>
                <dl className="d-flex flex-wrap text-right">
                  <dt className="w-75">Subtotal</dt>
                  <dd className="w-25">$0.00</dd>
                  <dt className="w-75">Delivery Fee</dt>
                  <dd className="w-25">Free</dd>
                  <dt className="w-75">Total</dt>
                  <dd className="w-25">${cartTotal}</dd>
                </dl>
                <a href="#" className="btn btn-secondary btn-block">Check out for Wednesday 12/19</a>
                <p className="mt-3">You have until <span className="text-primary">Sunday 12/9 by midnight</span> to edit your order</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

CartDashboard.propTypes = {

}

export default CartDashboard
