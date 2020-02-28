import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'

import { addToCart, itemInCart } from './cartActions'

const AddToCart = ({ item, recurringPurchase = false, singlePurchase = false }) => {
  const firebase = useFirebase()
  const dispatch = useDispatch()
  const cart = useSelector(state => state.firebase.profile.shoppingCart)
  const [cartItem, setCartItem] = useState(null)
  useEffect(() => {
    if (cart && item) {
      setCartItem(itemInCart({ item, cart }))
    }
  }, [cart, item])

  return (
    <>
      {cartItem ? (
        <div className="bg-teal text-center text-white p-2 w-100">
          <small>In cart</small>
        </div>
      ) : (
        <>
          <button
            type="button"
            className="product-button w-50"
            disabled={!singlePurchase}
            onClick={() => dispatch(addToCart({ firebase, cart, item: { ...item, recurring: false } }))}>
            One-Time
          </button>

          <button
            type="button"
            className="product-button w-50"
            disabled={!recurringPurchase}
            onClick={() => dispatch(addToCart({ firebase, cart, item: { ...item, recurring: true } }))}>
            Weekly
          </button>
        </>
      )}
    </>
  )
}

AddToCart.propTypes = {
  singlePurchase: PropTypes.bool,
  recurringPurchase: PropTypes.bool,
  item: PropTypes.instanceOf(Object)
}

export default AddToCart
