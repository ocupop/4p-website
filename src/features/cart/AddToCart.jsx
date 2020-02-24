import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useFirestore } from 'react-redux-firebase'
import PropTypes, { string } from 'prop-types'
import { addToCart } from './cartActions'

const AddToCart = ({ productID, item }) => {
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
          dispatch(addToCart({ firestore }, auth.uid, profile, productID, false, item))
        }}>
        Add Single Item
      </button>

      <button
        type="button"
        className="product-button w-50"
        disabled={item && item.recurringPurchase === false}
        onClick={() => {
          dispatch(addToCart({ firestore }, auth.uid, profile, productID, true, item))
        }}>
        Add Weekly Item
      </button>
    </>
  )
}

AddToCart.propTypes = {
  productID: PropTypes.string,
  item: PropTypes.instanceOf(Object)
}

export default AddToCart
