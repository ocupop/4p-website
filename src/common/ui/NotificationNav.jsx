import React from 'react'
import { Dropdown } from 'react-bootstrap'

const NotificationNav = () => {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="teal" id="dropdown-notification">
          <i className="ri-notification-2-fill"></i>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <div className="dropdown-item">
            Notification
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export default NotificationNav