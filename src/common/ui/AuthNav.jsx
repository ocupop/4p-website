import React from 'react'
// import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import LoadingComponent from './LoadingComponent'
import SignedInMenu from './menus/SignedInMenu'
import SignedOutMenu from './menus/SignedOutMenu'

const AuthNav = () => {
  const auth = useSelector(state => state.firebase.auth)

  return (
    <>
      {!isLoaded(auth) ? (
        <LoadingComponent inverted />
      ) : (
        isEmpty(auth)
        ? <SignedOutMenu/>
        : <SignedInMenu/>
      )}
    </>
  )
}

// AuthNav.propTypes = {

// }

export default AuthNav
