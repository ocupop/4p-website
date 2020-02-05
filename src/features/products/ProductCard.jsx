import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { SINGLE_BAG, RECURRING_BAG } from '../../common/constants/BagTypes'
import AddToBagButton from '../cart/AddToCartButton'

const ProductCard = ({ product: { variants, name, id } }) => {
  return (
    <div className="card product-card">
      <Link to={`/products/${id}`}>
        <div
          className="bg-image aspect-4x3"
          style={{
            backgroundImage: `url(${variants[0].featuredImage})`,
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6>Producer Name</h6>
          <div className="d-flex align-items-center justify-content-between">
            <div className="product-amount">
              {variants[0].size}
              {variants[0].unit}
            </div>
            <div className="product-price">${variants[0].price}</div>
          </div>
        </div>
      </Link>
      <div className="card-footer d-flex align-items-center p-0">
        
        {/* // @TODO we need to figure out which variant will be displayed and added to cart*/}
      {/* <AddToBagButton bagType={RECURRING_BAG} item={variants[0]}>
          Weekly
          <br />
          Delivery
        </AddToBagButton>

        <AddToBagButton bagType={SINGLE_BAG} item={variants[0]}>
          One-Time
          <br />
          Purchase
        </AddToBagButton> */}
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.instanceOf(Object),
}

export default ProductCard
