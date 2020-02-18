import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore'
import locationReducer from './location'

import asyncReducer from '../common/async/asyncReducer';
import modalReducer from '../features/modal/modalReducer';
// import testReducer from '../features/sandbox/testReducer';
// import authReducer from '../features/auth/authReducers';
// import cartReducer from '../features/cart/cartReducer';

const rootReducer = () => combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer, // <- needed if using firestore
  toastr: toastrReducer,
  location: locationReducer,
  async: asyncReducer,
  modals: modalReducer,
  // test: testReducer,
  // form: FormReducer,
  // auth: authReducer,
  // cart: cartReducer
})

export default rootReducer