import React from 'react'
import PropTypes from 'prop-types'

const CartListItem = ({ item }) => {

  return (
    <div>
      <h1>HELLO</h1>
      {item.title}
    </div>
  )
}

CartListItem.propTypes = {
  item: PropTypes.instanceOf(Object)
}

export default CartListItem