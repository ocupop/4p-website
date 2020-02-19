import React from 'react'
import PropTypes from 'prop-types'
import { useFirebase } from 'react-redux-firebase'
import { useDispatch } from 'react-redux'
import { logout } from './authActions'
import { Dropdown, Button } from 'react-bootstrap'

const SignedInMenu = ({ auth: { displayName, photoURL } }) => {
  const dispatch = useDispatch()
  const firebase = useFirebase()

  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        {/* @TODO: Add Notification Modal */}
        <button className="nav-link btn btn-teal">
          <i className="ri-notification-2-fill" />
        </button>
      </li>
      <li className="nav-item">
        <Dropdown>
          <Dropdown.Toggle variant="teal" id="dropdown-user">
            {/* @TODO: JB - Add avatar using photoURL */}
            {photoURL ? 
              <img src={photoURL} className="img-avatar"/>
              :
              <i className="ri-user-fill" />
            }
             <span className="text-uppercase">{displayName}</span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={console.log("GOTO PROFILE PAGE")}>Profile</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => dispatch(logout({ firebase }))}>Logout</Dropdown.Item>
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
