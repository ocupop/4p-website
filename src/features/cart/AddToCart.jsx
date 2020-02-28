import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'

import { addToCart, getCartItem } from './cartActions'

const AddToCart = ({ item, recurringPurchase = false, singlePurchase = false }) => {
  const firebase = useFirebase()
  const dispatch = useDispatch()
  const cart = useSelector(state => state.firebase.profile.shoppingCart)
  const [cartItem, setCartItem] = useState(null)
  useEffect(() => {
    if (cart && item) {
      setCartItem(getCartItem({ item, cart }))
    }
  }, [cart, item])

  return (
    <>
      {cartItem ? (
        <div className="bg-teal text-center text-white p-3 w-100">
          <small className="text-uppercase">
            <strong>{cartItem.quantity}</strong> In cart
          </small>
        </div>
      ) : (
        <>
          <button
            type="button"
            className="btn btn-add-to-cart w-50"
            disabled={!singlePurchase}
            onClick={() => dispatch(addToCart({ firebase, cart, item: { ...item, recurring: false } }))}>
            <i className="ri-add-line mr-2" />
            One-Time
          </button>

          <button
            type="button"
            className="btn btn-add-to-cart w-50"
            disabled={!recurringPurchase}
            onClick={() => dispatch(addToCart({ firebase, cart, item: { ...item, recurring: true } }))}>
            <i className="ri-add-line mr-2" />
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
