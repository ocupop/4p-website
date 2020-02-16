import React from 'react'
import { Dropdown } from 'react-bootstrap'

const UserNav = () => {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="teal" id="dropdown-user">
          <i className="ri-user-fill"></i> <span className="text-uppercase">Username</span>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <a className="dropdown-item" href="#">Login</a>
          <a className="dropdown-item" href="#">Logout</a>
          <a className="dropdown-item" href="#">Account</a>
        </Dropdown.Menu>
      </Dropdown> 
    </>
  )
}

export default UserNav
