import React from 'react'
// import PropTypes from 'prop-types'

const CartTotals = () => {
  return (
    <div className="row">
      <div className="col-lg-6 ml-lg-auto">
        <div className="content">
          <div className="form-group row align-items-center">
            {/* @TODO: add TextInput field component */}
            <label htmlFor="input-coupon-code" className="col-sm-2 col-form-label">
              Coupon Code
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="input-coupon-code" />
            </div>
          </div>
          <dl className="d-flex flex-wrap text-right">
            <dt className="w-75">Subtotal</dt>
            <dd className="w-25">$0.00</dd>
            <dt className="w-75">Delivery Fee</dt>
            <dd className="w-25">Free</dd>
            <dt className="w-75">Total</dt>
            <dd className="w-25">$0.00</dd>
          </dl>
          <a href="#" className="btn btn-secondary btn-block">
            Check out for Wednesday 12/19
          </a>
          <p className="mt-3">
            You have until <span className="text-primary">Sunday 12/9 by midnight</span> to edit your order
          </p>
        </div>
      </div>
    </div>
  )
}

CartTotals.propTypes = {}

export default CartTotals
