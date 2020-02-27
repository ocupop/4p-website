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

// /**
//  * Adds a Product Variant to the users shopping cart.
//  *
//  * @param {String} userID
//  * @param {Map} profile
//  * @param {String} productID
//  * @param {bool} recurring
//  * @param {Map} item
//  */
// export const addToCart = ({ firestore }, userID, profile, product, recurring, item) => {
//   return async dispatch => {
//     const sanitizedItem = {
//       productID: product.id,
//       productName: product.name,
//       variantID: item.variantID,
//       sku: item.sku,
//       vendorID: product.vendor.value,
//       vendorName: product.vendor.label,
//       price: item.price,
//       cost: item.cost,
//       size: item.size,
//       label: item.label,
//       featuredImageUrl: item.featuredImage,
//       recurring
//     }

//     const updatedCart = profile.shoppingCart
//     let updatedItem = { ...sanitizedItem }

//     // check the cart items
//     const itemToUpdate = updatedCart.items.filter(
//       cartItem => cartItem.variantID === sanitizedItem.variantID && cartItem.productID === sanitizedItem.productID
//     )

//     // check if we need to add a new item
//     if (!itemToUpdate.length) {
//       updatedItem = { quantity: 1, ...sanitizedItem }
//       updatedCart.items.push({ ...updatedItem })
//     }
//     // check if there was an item within the cart already, we need to update the quantity count
//     else {
//       updatedCart.items.map(cartItem => {
//         if (cartItem.variantID === updatedItem.variantID && cartItem.productID === updatedItem.productID) {
//           return {
//             quantity: (cartItem.quantity += 1),
//             ...updatedItem
//           }
//         }
//         return updatedItem
//       })
//     }

//     updatedCart.cartPrice += sanitizedItem.price

//     console.log(updatedCart)
//     try {
//       dispatch(asyncActionStart())
//       firestore.update(`profiles/${userID}`, { shoppingCart: updatedCart })
//       toastr.success('Success', 'Product has been added')
//       dispatch(asyncActionFinish())
//     } catch (error) {
//       console.log(error)
//       dispatch(asyncActionError())
//       toastr.error('Oops', 'There was an issue adding to Firestore')
//     }
//   }
// }

// /**
//  * Removes an item from the cart
//  *
//  * @param {String} userID
//  * @param {Map} profile
//  * @param {Map} item
//  */
// export const removeFromCart = ({ firestore }, userID, profile, productID, item) => {
//   return async dispatch => {
//     const updatedCart = profile.shoppingCart
//     // validate that there are items to remove
//     if (!profile.shoppingCart.items.length) {
//       return
//     }

//     const itemToRemove = updatedCart.items.filter(
//       cartItem => cartItem.variantID === item.variantID && cartItem.productID === productID
//     )

//     // there is no item to remove
//     if (!itemToRemove.length) {
//       return
//     }

//     // check if the item being removed has a quantity of more than 1
//     // if it does remove 1 from the count
//     if (itemToRemove[0].quantity > 1) {
//       updatedCart.items.map(cartItem => {
//         if (cartItem.variantID === item.variantID && cartItem.productID === productID) {
//           return {
//             quantity: (cartItem.quantity -= 1),
//             ...cartItem
//           }
//         }
//         return cartItem
//       })
//     }
//     // if the cartQuanity of that item is <= 1 remove the item
//     else if (itemToRemove[0].quantity <= 1) {
//       // filter out any variant that doesn't match the itemToRemove variant ID
//       updatedCart.items = updatedCart.items.filter(cartItem => cartItem.productID !== itemToRemove[0].productID)
//     }

//     // dont let the cart price drop below 0
//     updatedCart.cartPrice = updatedCart.cartPrice <= 0 ? 0 : (updatedCart.cartPrice -= item.price)

//     try {
//       dispatch(asyncActionStart())
//       firestore.update(`profiles/${userID}`, { shoppingCart: updatedCart })
//       toastr.success('Success', 'Product has been removed')
//       dispatch(asyncActionFinish())
//     } catch (error) {
//       console.log(error)
//       dispatch(asyncActionError())
//       toastr.error('Oops', 'There was an issue adding to Firestore')
//     }
//   }
// }
