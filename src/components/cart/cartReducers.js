import { ADD_TO_CART, REMOVE_FROM_CART } from './cartTypes'

const INITIAL_STATE = {
  cartItem: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cartItem: action.payload};
    case REMOVE_FROM_CART:
      return { ...state, cartItem: action.payload };
    default:
      return state;
  }
};