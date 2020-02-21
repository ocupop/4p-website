import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useFirestore } from 'react-redux-firebase'
import PropTypes from 'prop-types'
import { addToCart } from './cartActions'

const AddToCart = ({ productId, item }) => {
  const firestore = useFirestore()
  const dispatch = useDispatch()
  const profile = useSelector(state => state.firebase.profile)

  return (
    <>
      <button
        type="button"
        className="product-button w-50"
        disabled={item && item.singlePurchase === false}
        onClick={() => {
          dispatch(addToCart({ firestore }, profile, productId, false, item))
        }}>
        Add Single Item
      </button>

      <button
        type="button"
        className="product-button w-50"
        disabled={item && item.recurringPurchase === false}
        onClick={() => {
          dispatch(addToCart({ firestore }, profile, productId, true, item))
        }}>
        Add Weekly Item
      </button>
    </>
  )
}

AddToCart.propTypes = {
  productId: PropTypes.instanceOf(String),
  item: PropTypes.instanceOf(Object)
}

export default AddToCart
