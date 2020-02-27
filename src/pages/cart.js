import React from 'react'
// import PropTypes from 'prop-types'
import Cart from '../features/cart'
import FeaturedProducts from '../features/product/FeaturedProducts'

const CartPage = () => {
  return (
    <>
      <section>
        <div className="container">
          <Cart />
          <hr />
          <FeaturedProducts />
        </div>
      </section>
    </>
  )
}

CartPage.propTypes = {}

export default CartPage
