import React from 'react'
// import PropTypes from 'prop-types'
import { Field } from 'formik'
import { TextInput } from '../../common/fields'
import { formatMoney, formatDate } from '../../common/utils/helpers'

const CartTotals = ({ shoppingCart }) => {
  const { cartPrice, discountCode, cartDate } = shoppingCart

  return (
    <div className="row">
      <div className="col-lg-6 ml-lg-auto">
        <div className="form-group row align-items-center d-none">
          {discountCode ? (
            <p className="bg-light p-3 ml-auto">
              <small>discount code has been applied</small>
            </p>
          ) : (
            <div className="form-inline ml-auto mr-3">
              <Field
                className="mb-0"
                name="discountCode"
                component={TextInput}
                onChange={({ target: { value } }) => setFieldValue(discountCode, value)}
                placeholder="0"
                label="Coupon Code"
              />
            </div>
          )}
        </div>
        <dl className="d-flex flex-wrap text-right">
          <dt className="w-75">Subtotal</dt>
          <dd className="w-25">{formatMoney(cartPrice)}</dd>
          <dt className="w-75">Delivery Fee</dt>
          <dd className="w-25">Free</dd>
          <dt className="w-75">Total</dt>
          <dd className="w-25">{formatMoney(cartPrice)}</dd>
        </dl>
        <p className="mt-5 text-right">
          <small>
            You have until{' '}
            <span className="text-primary">({cartDate ? formatDate(cartDate) : 'DATE'}) by midnight</span> to edit your
            order
          </small>
        </p>
      </div>
    </div>
  )
}

CartTotals.propTypes = {}

export default CartTotals
