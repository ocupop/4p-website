import React from 'react'
// import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { openModal } from '../modal/modalActions'

const SignedOutMenu = () => {
  const dispatch = useDispatch()
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <button
          type="button"
          onClick={() => dispatch(openModal('LoginModal'))}
          >
            Login
        </button>
      </li>
    </ul>
  )
}

SignedOutMenu.propTypes = {

}

export default SignedOutMenu
