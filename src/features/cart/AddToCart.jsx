import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useFirestore, useFirestoreConnect } from 'react-redux-firebase'
import PropTypes from 'prop-types'

const AddToCart = ({ productId, item }) => {
  const firestore = useFirestore()
  const dispatch = useDispatch()

  const auth = useSelector(state => state.firebase.auth)
  // const profile = useSelector(state => state.firebase.profile)

  return (
    <>
      <button
        type="button"
        className="product-button w-50"
        disabled={item && item.singlePurchase === false}
        onClick={() => {
          console.log('Adding Single Item')
          console.log(auth.uid, productId, item)
          // dispatch(addToCart({ firestore }, auth.uid, item))
        }}>
        Add Single Item
      </button>

      <button
        type="button"
        className="product-button w-50"
        disabled={item && item.recurrsingPurchase === false}
        onClick={() => {
          console.log('Adding Weekly Item')
          console.log(auth.uid, productId, item)
          // dispatch(addToCart({ firestore } auth.uid, item)
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
