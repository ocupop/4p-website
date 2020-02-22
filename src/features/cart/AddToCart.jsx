import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useFirestore } from 'react-redux-firebase'
import PropTypes, { string } from 'prop-types'
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
          dispatch(addToCart({ firestore }, auth.uid, profile, productId, false, item))
        }}>
        Add Single Item
      </button>

      <button
        type="button"
        className="product-button w-50"
        disabled={item && item.recurringPurchase === false}
        onClick={() => {
          dispatch(addToCart({ firestore }, auth.uid, profile, productId, true, item))
        }}>
        Add Weekly Item
      </button>
    </>
  )
}

AddToCart.propTypes = {
  productId: PropTypes.String,
  item: PropTypes.instanceOf(Object)
}

export default AddToCart
