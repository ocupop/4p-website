import { LOGIN_USER, LOGOUT_USER } from './authConstants';
import { createReducer } from '../../common/utils/reducerUtil'

const initialState = {
  currentUser: null
}

export const loginUser = (state, payload) => {
  return {
    ...state,
    authenticated: true,
    currentUser: payload
  }
}

export const logoutUser = (state, payload) => {
  return {
    ...state,
    authenticated: false,
    currentUser: payload
  }
}

export default createReducer(initialState, {
  [LOGIN_USER]: loginUser,
  [LOGOUT_USER]: logoutUser
})