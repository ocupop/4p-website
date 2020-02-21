import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useFirestore, useFirestoreConnect } from 'react-redux-firebase'
import PropTypes from 'prop-types'
import { addToCart } from './cartActions'

const AddToCart = ({ productId, item }) => {
  const firestore = useFirestore()
  const dispatch = useDispatch()

  const auth = useSelector(state => state.firebase.auth)
  const profile = useSelector(state => state.firebase.profile)

  return (
    <>
      <button
        type="button"
        className="product-button w-50"
        disabled={item && item.singlePurchase === false}
        onClick={() => {
          const updatedCart = profile.shoppingCart
          updatedCart.items.push({ productId, recurring: false, ...item })
          updatedCart.cartPrice += item.cost

          dispatch(addToCart({ firestore }, auth.uid, updatedCart))
        }}>
        Add Single Item
      </button>

      <button
        type="button"
        className="product-button w-50"
        disabled={item && item.recurringPurchase === false}
        onClick={() => {
          const updatedCart = profile.shoppingCart
          updatedCart.items.push({ productId, recurring: true, ...item })
          updatedCart.cartPrice += item.cost

          dispatch(addToCart({ firestore }, auth.uid, updatedCart))
        }}>
        Add Weekly Item
      </button>
    </>
  )
}

AddToCart.propTypes = {
  item: PropTypes.instanceOf(Object)
}

export default AddToCart
