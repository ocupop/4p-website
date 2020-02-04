import { ADD_TO_CART, REMOVE_FROM_CART } from './cartTypes'

export const addToCart = (cartItem) => {
  console.log(`Adding ${cartItem} to cart`)
  return {
    type: ADD_TO_CART,
    payload: cartItem
  };
};

export const removeFromCart = (cartItem) => {
  console.log(`Removing ${cartItem} from cart`)
    return {
      type: REMOVE_FROM_CART,
      payload: cartItem
    };
  };