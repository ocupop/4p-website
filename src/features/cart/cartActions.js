import { toastr } from 'react-redux-toastr'
import _ from 'lodash'
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../../common/async/asyncActions'

/**
 * Adds a Product Variant to the users shopping cart.
 *
 * @param {String} userID
 * @param {Map} profile
 * @param {String} productID
 * @param {bool} recurring
 * @param {Map} item
 */
export const addToCart = ({ firestore }, userID, profile, productID, recurring, item) => {
  return async dispatch => {
    const sanitizedItem = {
      variantID: item.variantID,
      price: item.price,
      cost: item.cost,
      quantity: item.quantity,
      label: item.label,
      featuredImage: item.featuredImage
    }

    const updatedCart = profile.shoppingCart
    let updatedItem = { ...sanitizedItem }

    // check the cart items
    const itemToUpdate = updatedCart.items.filter(cartItem => cartItem.variantID === sanitizedItem.variantID)

    // check if we need to add a new item
    if (!itemToUpdate.length) {
      updatedItem = { cartQuantity: 1, ...sanitizedItem }
      updatedCart.items.push({ productID, recurring, ...updatedItem })
    }
    // check if there was an item within the cart already, we need to update the quantity count
    else {
      updatedCart.items.map(cartItem => {
        if (cartItem.variantID === updatedItem.variantID) {
          return {
            cartQuantity: (cartItem.cartQuantity += 1),
            ...updatedItem
          }
        }
        return updatedItem
      })
    }

    updatedCart.cartPrice += sanitizedItem.cost

    try {
      dispatch(asyncActionStart())
      firestore.update(`profiles/${userID}`, { shoppingCart: updatedCart })
      toastr.success('Success', 'Product has been added')
      dispatch(asyncActionFinish())
    } catch (error) {
      console.log(error)
      dispatch(asyncActionError())
      toastr.error('Oops', 'There was an issue adding to Firestore')
    }
  }
}

/**
 * Removes an item from the cart
 *
 * @param {String} userID
 * @param {Map} profile
 * @param {Map} item
 */
export const removeFromCart = ({ firestore }, userID, profile, item) => {
  return async dispatch => {
    const updatedCart = profile.shoppingCart
    // validate that there are items to remove
    if (!profile.shoppingCart.items.length) {
      return
    }

    const itemToRemove = updatedCart.items.filter(cartItem => cartItem.variantID === item.variantID)

    // there is no item to remove
    if (!itemToRemove.length) {
      return
    }

    // check if the item being removed has a cartQuantity of more than 1
    // if it does remove 1 from the count
    if (itemToRemove[0].cartQuantity > 1) {
      updatedCart.items.map(cartItem => {
        if (cartItem.variantID === item.variantID) {
          return {
            cartQuantity: (cartItem.cartQuantity -= 1),
            ...cartItem
          }
        }
        return cartItem
      })
    }
    // if the cartQuanity of that item is <= 1 remove the item
    else if (itemToRemove[0].cartQuantity <= 1) {
      // filter out any variant that doesn't match the itemToRemove variant ID
      updatedCart.items = updatedCart.items.filter(cartItem => cartItem.variantID !== itemToRemove[0].variantID)
    }

    // dont let the cart price drop below 0
    updatedCart.cartPrice = updatedCart.cartPrice <= 0 ? 0 : (updatedCart.cartPrice -= item.cost)

    try {
      dispatch(asyncActionStart())
      firestore.update(`profiles/${userID}`, { shoppingCart: updatedCart })
      toastr.success('Success', 'Product has been removed')
      dispatch(asyncActionFinish())
    } catch (error) {
      console.log(error)
      dispatch(asyncActionError())
      toastr.error('Oops', 'There was an issue adding to Firestore')
    }
  }
}
