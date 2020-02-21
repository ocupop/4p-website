import { toastr } from 'react-redux-toastr'
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../../common/async/asyncActions'

/**
 * Takes an updated shopping cart and adds it to firestore
 *
 * @param {String} userId
 * @param {map} updatedShoppingCart
 */
export const addToCart = ({ firestore }, profile, productId, recurring, item) => {
  return async dispatch => {
    const updatedCart = profile.shoppingCart
    updatedCart.items.push({ productId, recurring, ...item })
    updatedCart.cartPrice += item.cost

    try {
      dispatch(asyncActionStart())
      firestore.update(`profiles/${profile.id}`, { shoppingCart: updatedCart })
      toastr.success('Success', 'Product has been added')
      dispatch(asyncActionFinish())
    } catch (error) {
      console.log(error)
      dispatch(asyncActionError())
      toastr.error('Oops', 'There was an issue adding to Firestore')
    }
  }
}

export const removeFromCart = ({ firestore }, profile, item) => {
  return async dispatch => {
    const updatedCart = profile.shoppingCart
    updatedCart.items.push({ productId, recurring, ...item })
    updatedCart.cartPrice -= item.cost

    try {
      dispatch(asyncActionStart())
      //firestore.update(`profiles/${profile.id}`, { shoppingCart: updatedCart })
      toastr.success('Success', 'Product has been added')
      dispatch(asyncActionFinish())
    } catch (error) {
      console.log(error)
      dispatch(asyncActionError())
      toastr.error('Oops', 'There was an issue adding to Firestore')
    }
  }
}
