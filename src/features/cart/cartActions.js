import { toastr } from 'react-redux-toastr'
import _ from 'lodash'
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../../common/async/asyncActions'

function _setCartPrice(cart) {
  const cartPrice = cart.items.reduce((price, item) => {
    return price + item.price * item.quantity
  }, 0)

  return parseFloat(cartPrice).toFixed(2)
}

function _cleanCart(cart) {
  // remove all items with a quantity of zero
  cart.items = cart.items.filter(item => item.quantity)

  // remove duplicates and calculate quantity
  // const cleanItems = Array.from(new Set(cart.items.map(item => item.itemID))).map(id => {
  //   const duplicateItems = cart.items.filter(item => item.itemID === id)
  //   let totalQuantity = 0
  //   duplicateItems.forEach(item => {
  //     totalQuantity += item.quantity
  //   })

  //   return { ...duplicateItems[0], totalQuantity }
  // })
  // cart.items = cleanItems

  return cart
}

function _itemInCart({ item: { itemID }, cart }) {
  return cart.items.filter(item => item.itemID === itemID).length
}

function _updateItemQuantity({ item: { itemID, quantity }, cart: { items } }) {
  items.filter(i => i.itemID === itemID).map(item => (item.quantity += quantity))
}

export const updateCart = ({ firebase, newCart }) => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart())
      // console.log('Sanity Check:', newCart) // Console out what you need to accomplish the next step

      // Clean up cart
      newCart = _cleanCart(newCart)

      // Set the cartPrice
      newCart.cartPrice = _setCartPrice(newCart)

      // Update the cart in Firebase using react-redux-firebase "Update Profile" method
      // https://react-redux-firebase.com/docs/recipes/profile.html#update-profile
      firebase.updateProfile({ shoppingCart: newCart })

      toastr.success('Success', 'Your cart has been updated')
      dispatch(asyncActionFinish())
    } catch (error) {
      console.log(error)
      dispatch(asyncActionError())
      toastr.error('Oops', 'There was an issue updating the database. Please try again.')
    }
  }
}

export const addToCart = ({ firebase, cart, item }) => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart())
      // console.log('Sanity Check:', item, cart) // Console out what you need to accomplish the next step

      // _itemInCart({ item, cart }) ? console.log('update quantity') : console.log('add to cart')
      _itemInCart({ item, cart }) ? _updateItemQuantity({ item, cart }) : cart.items.push(item)

      // Clean up cart
      let newCart = _cleanCart(cart)

      // Set the cartPrice
      newCart.cartPrice = _setCartPrice(newCart)

      // Update the cart in Firebase using react-redux-firebase "Update Profile" method
      // https://react-redux-firebase.com/docs/recipes/profile.html#update-profile
      firebase.updateProfile({ shoppingCart: newCart })

      toastr.success('Success', 'Item has been added to your cart')
      dispatch(asyncActionFinish())
    } catch (error) {
      console.log(error)
      dispatch(asyncActionError())
      toastr.error('Oops', 'There was an issue updating the database. Please try again.')
    }
  }
}

export const makeRecurring = ({ firestore, profile, item: { productID, variantID } }) => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart())
      console.log(profile.id, productID, variantID) // Console out what you need to accomplish the next step
      // firestore.update(`/profiles/${profile.id}`, { items })

      toastr.success('Success', 'Your cart has been updated')
      dispatch(asyncActionFinish())
    } catch (error) {
      console.log(error)
      dispatch(asyncActionError())
      toastr.error('Oops', 'There was an issue updating the database. Please try again.')
    }
  }
}
