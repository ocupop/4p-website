import React from 'react'
import PropTypes from 'prop-types'

const CartSummaryItem = ({ item }) => {
  const { featuredImage, title, quantity, price } = item
  return (
    <div className="row">
      <div className="col-3">
        <div className="bg-image aspect-4x3"
          style={{
            backgroundImage: `url(${featuredImage})`,
          }} />
      </div>
      <div className="col-6">
        <p className="mb-0 text-uppercase font-headings"><strong>{title}</strong></p>
        <span className="text-uppercase"><small>Amount</small></span><br />
        <span className="text-uppercase"><small>Qty: {quantity}</small></span>
      </div>
      <div className="col-3">
        <span className="product-price"><small><strong>${price}</strong></small></span><br />
      </div>
    </div>
  )
}

CartSummaryItem.propTypes = {
  item: PropTypes.instanceOf(Object)
}

export default CartSummaryItem
