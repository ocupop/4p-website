import { toastr } from 'react-redux-toastr'
import _ from 'lodash'
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../../common/async/asyncActions'

/**
 * Takes an updated shopping cart and adds it to firestore
 *
 * @param {String} userId
 * @param {map} updatedShoppingCart
 */
export const addToCart = ({ firestore }, userId, profile, productId, recurring, item) => {
  return async dispatch => {
    const updatedCart = profile.shoppingCart
    let updatedItem = { ...item }

    // check the cart items
    const itemToUpdate = updatedCart.items.filter(cartItem => cartItem.variantId === item.variantId)

    // check if we need to add a new item
    if (!itemToUpdate.length) {
      updatedItem = { cartQuantity: 1, ...item }
      updatedCart.items.push({ productId, recurring, ...updatedItem })
    }
    // check if there was an item within the cart already, we need to update the quantity count
    else {
      updatedCart.items.map(cartItem => {
        if (cartItem.variantId === item.variantId) {
          return {
            cartQuantity: (cartItem.cartQuantity += 1),
            ...cartItem
          }
        }
        return cartItem
      })
    }

    updatedCart.cartPrice += item.cost

    try {
      dispatch(asyncActionStart())
      firestore.update(`profiles/${userId}`, { shoppingCart: updatedCart })
      toastr.success('Success', 'Product has been added')
      dispatch(asyncActionFinish())
    } catch (error) {
      console.log(error)
      dispatch(asyncActionError())
      toastr.error('Oops', 'There was an issue adding to Firestore')
    }
  }
}

export const removeFromCart = ({ firestore }, userId, profile, item) => {
  return async dispatch => {
    let updatedCart = profile.shoppingCart
    // validate that there are items to remove
    if (!profile.shoppingCart.items.length) {
      return
    }

    const itemToRemove = updatedCart.items.filter(cartItem => cartItem.variantId === item.variantId)

    // there is no item to remove
    if (!itemToRemove.length) {
      return
    }

    // check if the item being removed has a cartQuantity of more than 1
    // if it does remove 1 from the count
    if (itemToRemove[0].cartQuantity > 1) {
      updatedCart.items.map(cartItem => {
        if (cartItem.variantId === item.variantId) {
          return {
            cartQuantity: (cartItem.cartQuantity -= 1),
            ...cartItem
          }
        }
        return cartItem
      })
    }
    // if the cartQuanity of that item is less <= 1 remove the item
    else if (itemToRemove[0].cartQuantity <= 1) {
      updatedCart.items = updatedCart.items.filter(
        cartItem => cartItem.variantId === item.variantId && cartItem.cartQuantity > 1
      )
    }

    // dont let the cart drop below 0
    updatedCart.cartPrice = updatedCart.cartPrice <= 0 ? 0 : (updatedCart.cartPrice -= item.cost)

    try {
      dispatch(asyncActionStart())
      firestore.update(`profiles/${userId}`, { shoppingCart: updatedCart })
      toastr.success('Success', 'Product has been removed')
      dispatch(asyncActionFinish())
    } catch (error) {
      console.log(error)
      dispatch(asyncActionError())
      toastr.error('Oops', 'There was an issue adding to Firestore')
    }
  }
}
