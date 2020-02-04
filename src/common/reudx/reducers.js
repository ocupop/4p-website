import { combineReducers } from 'redux';
import cartReducers from '../../components/cart/cartReducers';

export default combineReducers({
  cart: cartReducers
});