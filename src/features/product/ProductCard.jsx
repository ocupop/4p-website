import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import AddToCart from '../../features/cart/AddToCart'
import { formatMoney } from '../../common/utils/helpers'

const ProductCard = ({ product }) => {
  const { vendor } = product
  const defaultVariant = product.variants[0]

  return (
    <div className="card product-card">
      <Link
        to={`/products/${product.id}`}
        className="bg-image aspect-4x3"
        style={{ backgroundImage: `url(${defaultVariant.featuredImage})` }}
      />
      <div className="card-header">
        <h5 className="card-title">{product.name}</h5>
      </div>
      <Link to={`/products/${product.id}`} className="card-body">
        {vendor.name && <h6>{vendor.name}</h6>}
        <div className="d-flex align-items-center justify-content-between w-100">
          <div className="product-amount">
            {defaultVariant.size && defaultVariant.size}
            {defaultVariant.label && <em>{defaultVariant.label}</em>}
          </div>
          <div className="product-price">{formatMoney(defaultVariant.price)}</div>
        </div>
      </Link>
      <div className="card-footer d-flex align-items-center p-0">
        <AddToCart product={product} item={defaultVariant} />
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.instanceOf(Object)
}

export default ProductCard
