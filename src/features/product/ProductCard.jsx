import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import AddToCart from '../../features/cart/AddToCart'
import { formatMoney } from '../../common/utils/helpers'

const ProductCard = ({ product }) => {
  const { vendor } = product
  const defaultVariant = product.variants[0]
  const [selectedVariant, setSelectedVariant] = useState(defaultVariant)

  const item = {
    productID: product.id,
    productName: product.name,
    variantID: selectedVariant.variantID,
    sku: selectedVariant.sku || product.sku,
    vendorID: vendor.value,
    vendorName: vendor.label,
    price: selectedVariant.price,
    cost: selectedVariant.cost,
    size: selectedVariant.size,
    label: selectedVariant.label,
    featuredImageUrl: selectedVariant.featuredImage,
    quantity: 1 // This is default but should be able to be updated from this component.
  }

  return (
    <div className="card product-card">
      <Link
        to={`/products/${item.productID}`}
        className="bg-image aspect-4x3"
        style={{ backgroundImage: `url(${item.featuredImage})` }}
      />
      <div className="card-header">
        <h5 className="card-title">{item.productName}</h5>
      </div>
      <Link to={`/products/${item.productID}`} className="card-body">
        {vendor.name && <h6>{item.vendorName}</h6>}
        <div className="d-flex align-items-center justify-content-between w-100">
          <div className="product-amount">
            {item.size && item.size}
            {item.label && <em>{item.label}</em>}
          </div>
          <div className="product-price">{formatMoney(item.price)}</div>
        </div>
      </Link>
      <div className="card-footer d-flex align-items-center p-0">
        <AddToCart item={item} />
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.instanceOf(Object)
}

export default ProductCard
