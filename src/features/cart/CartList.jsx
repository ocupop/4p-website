import React from 'react'
import PropTypes from 'prop-types'
import CartListItem from './CartListItem'

const CartList = ({ items }) => {

  return (
    <>
      {items && items.map(item => <CartListItem item={item} key={item.variantID} />)}
    </>
  )
}

CartList.propTypes = {
  items: PropTypes.instanceOf(Array)
}

export default CartList