import React from 'react'
import PropTypes from 'prop-types'

const ProductCard = ({ product: { variants, name } }) => {
  return (
    <div className="card product-card">
      <div
        className="bg-image aspect-4x3"
        style={{
          backgroundImage: `url(${variants[0].featuredImage})`
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6>Producer Name</h6>
        <div className="d-flex align-items-center justify-content-between">
          <div className="product-amount">{variants[0].size}{variants[0].unit}</div>
          <div className="product-price">${variants[0].price}</div>
        </div>
      </div>
      <div className="card-footer d-flex align-items-center p-0">
        <button type="button" className="product-button w-50">
          Weekly<br />
          Delivery
          </button>
        <button type="button" className="product-button w-50">
          One-Time<br />
          Purchase
          </button>
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.instanceOf(Object)
}

export default ProductCard
