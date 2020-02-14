import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const ProductCard = ({ product }) => {
  const { vendor } = product
  const defaultVariant = product.variants[0]

  return (
    <div className="card product-card">
      <Link to={`/products/${product.id}`}>
        <div
          className="bg-image aspect-4x3"
          style={{ backgroundImage: `url(${defaultVariant.featuredImage})` }}
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <h6>{vendor.name}</h6>
          <div className="d-flex align-items-center justify-content-between">
            <div className="product-amount">{defaultVariant.name} <em>{defaultVariant.label}</em></div>
            <div className="product-price">${defaultVariant.price}</div>
          </div>
        </div>
      </Link>
      <div className="card-footer d-flex align-items-center p-0">
        {/* Add to Cart */}
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.instanceOf(Object),
}

export default ProductCard
