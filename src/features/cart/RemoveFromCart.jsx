import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useFirestore } from 'react-redux-firebase'
import PropTypes from 'prop-types'
import { removeFromCart } from './cartActions'

const RemoveFromCart = ({ item }) => {
  const firestore = useFirestore()
  const dispatch = useDispatch()
  const auth = useSelector(state => state.firebase.auth)
  const profile = useSelector(state => state.firebase.profile)

  return (
    <>
      <button
        type="button"
        className="btn btn-danger w-50"
        disabled={
          profile.shoppingCart &&
          !profile.shoppingCart.items.filter(cartItem => cartItem.variantID === item.variantID).length
        } // disable if nothing is within the cart
        onClick={() => {
          dispatch(removeFromCart({ firestore }, auth.uid, profile, item))
        }}>
        Remove Item
      </button>
    </>
  )
}

RemoveFromCart.propTypes = {
  item: PropTypes.instanceOf(Object)
}

export default RemoveFromCart
