import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore'
import locationReducer from './location'

import asyncReducer from '../features/async/asyncReducer'
import modalReducer from '../features/modal/modalReducer'
import authReducer from '../features/auth/authReducer'
// import testReducer from '../features/sandbox/testReducer';
// import cartReducer from '../features/cart/cartReducer';

const rootReducer = () => combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer, // <- needed if using firestore
  toastr: toastrReducer,
  location: locationReducer,
  async: asyncReducer,
  modals: modalReducer,
  auth: authReducer,
  // test: testReducer,
  // form: FormReducer,
  // cart: cartReducer
})

export default rootReducer