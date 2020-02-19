import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import useCart from './useCart'
import { SINGLE_BAG, RECURRING_BAG } from '../../common/constants/BagTypes'

const AddToCart = ({ item }) => {
  const { addToCart } = useCart({ author: { id: 123 } })
  const [buttonDisabled, isButtonDisabled] = useState(false)

  useEffect(() => {
    if (
      (bagType === SINGLE_BAG && item.singlePurchase === false) ||
      (bagType === RECURRING_BAG && item.recurringPurchase === false)
    ) {
      isButtonDisabled(true)
    }
  }, [item])

  return (
    <>
      <button
        type="button"
        className="product-button w-50"
        disabled={buttonDisabled}
        onClick={() => addToCart(item, bagType)}>
        {children}
      </button>
    </>
  )
}

AddToCart.propTypes = {
  children: PropTypes.node,
  bagType: PropTypes.string,
  item: PropTypes.instanceOf(Object),
}

export default AddToCart
