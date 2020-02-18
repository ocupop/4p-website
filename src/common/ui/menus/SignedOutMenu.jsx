import React from 'react'
// import PropTypes from 'prop-types'
import { useFirebase, isLoaded, isEmpty } from 'react-redux-firebase'
import GoogleButton from 'react-google-button' // optional

const SignedOutMenu = () => {
  const firebase = useFirebase()
  function loginWithGoogle() {
    return firebase.login({ provider: 'google', type: 'popup' })
  }

  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <GoogleButton
          type="light" // can also be written as disabled={true} for clarity
          onClick={() => { console.log('Google button clicked') }}
        />
      </li>
    </ul>
  )
}

SignedOutMenu.propTypes = {

}

export default SignedOutMenu
