import React from 'react'
import PropTypes from 'prop-types'
import CartListItem from './CartListItem'

const CartList = ({ bags }) => {

  return (
    <>
      {bags && bags.map(bag => (
        <li key={bag.id}>
          {bag.items && bag.items.map(item => <CartListItem item={item} key={item.variantID} />)}
        </li>
      ))}
    </>
  )
}

CartList.propTypes = {
  bags: PropTypes.instanceOf(Array)
}

export default CartList