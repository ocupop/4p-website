import React from 'react'
import PropTypes from 'prop-types'
import { useFirebase } from 'react-redux-firebase'
import { Dropdown } from 'react-bootstrap'
import { logout } from './authActions'


const SignedInMenu = ({ auth: { displayName, photoURL } }) => {
  const firebase = useFirebase()

  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        {/* @TODO: Add Notification Modal */}
        <button type="button" className="nav-link btn btn-teal">
          <i className="ri-notification-2-fill" />
        </button>
      </li>
      <li className="nav-item">
        <Dropdown>
          <Dropdown.Toggle variant="teal" id="dropdown-user">
            {photoURL ? (
              <img src={photoURL} className="img-avatar" alt={displayName} />
            ):(
              <i className="ri-user-fill" />
            )}
             <span className="text-uppercase">{displayName}</span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>Profile</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => logout({ firebase })}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </li>
    </ul>
  )
}

SignedInMenu.propTypes = {
  auth: PropTypes.instanceOf(Object)
}

export default SignedInMenu
