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
      <li className="nav-item dropdown">
        {/* @TODO: JB - does this need to be a dropdown? */}
        <Dropdown>
          <Dropdown.Toggle variant="teal" id="dropdown-notification">
            <i className="ri-notification-2-fill"/>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <div className="dropdown-item">
              Notifications
          </div>
          </Dropdown.Menu>
        </Dropdown>
      </li>
      <li className="nav-item">
        <Dropdown>
          <Dropdown.Toggle variant="teal" id="dropdown-user">
            {/* @TODO: JB - Add avatar using photoURL */}
            <i className="ri-user-fill" /> <span className="text-uppercase">{displayName}</span>
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
