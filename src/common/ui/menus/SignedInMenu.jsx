import React from 'react'
// import PropTypes from 'prop-types'
import { Dropdown } from 'react-bootstrap'

const SignedInMenu = () => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item dropdown">
        <Dropdown>
          <Dropdown.Toggle variant="teal" id="dropdown-notification">
            <i className="ri-notification-2-fill"/>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <div className="dropdown-item">
              Notification
          </div>
          </Dropdown.Menu>
        </Dropdown>
      </li>
      <li className="nav-item">
        <Dropdown>
          <Dropdown.Toggle variant="teal" id="dropdown-user">
            <i className="ri-user-fill" /> <span className="text-uppercase">Username</span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <a className="dropdown-item" href="#">Logout</a>
            <a className="dropdown-item" href="#">Account</a>
          </Dropdown.Menu>
        </Dropdown>
      </li>
    </ul>
  )
}

SignedInMenu.propTypes = {

}

export default SignedInMenu
