import React, { useState, useEffect } from 'react'
import UserAlert from '../../common/ui/UserAlert'
// import PropTypes from 'prop-types'

const Notifications = () => {
  const [currentNotifications, setCurrentNotifications] = useState(null)

  const notifications = [
    {
      priority: 'danger',
      show: true,
      title: 'This is the Danger title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. '
    },
    {
      priority: 'warning',
      show: true,
      title: 'This the warning title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
    },
    {
      priority: 'info',
      show: true,
      title: 'This is the info title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ]

  useEffect(() => {
    setCurrentNotifications(notifications)
  }, [])
  console.log(currentNotifications)
  return (
    <div className="row mt-5">
      <div className="col-12">
        <div className="content">
          <p>
            <strong>Customer:</strong> notifications/messages
          </p>
          {currentNotifications &&
            currentNotifications.map((notification, index) => (
              <UserAlert
                key={index}
                title={notification.title}
                description={notification.description}
                priority={notification.priority}
              />
              // <div key={index} className={`alert alert-${notification.priority}`} role="alert">
              //   <h4>{notification.title}</h4>
              //   <p>{notification.description}</p>
              // </div>
            ))}
        </div>
      </div>
    </div>
  )
}

Notifications.propTypes = {}

export default Notifications
