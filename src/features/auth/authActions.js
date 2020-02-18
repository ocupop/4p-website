import { toastr } from 'react-redux-toastr';
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../async/asyncActions'
import { LOGIN_USER, LOGOUT_USER } from './authConstants'

export const loginWithEmail = ({ firebase }) => {

}

export const loginWithGoogle = ({ firebase }) => {

  return async (dispatch) => {

    try {
      dispatch(asyncActionStart())
      const currentUser = firebase.login({ provider: 'google', type: 'redirect' })
      dispatch(asyncActionFinish())
      return {
        type: LOGIN_USER,
        payload: currentUser
      }
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError());
      toastr.error('Oops', 'You are not able to login');
    }
  }

}

export const logout = ({ firebase }) => {

  return async (dispatch) => {
    try {
      dispatch(asyncActionStart())
      await firebase.auth().signOut()
      dispatch(asyncActionFinish())
      toastr.success('Goodbye', 'You are now logged out');
      return {
        type: LOGOUT_USER,
        payload: {}
      }
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError());
      toastr.error('Oops', 'You are not able to logout');
    }
  }

}

