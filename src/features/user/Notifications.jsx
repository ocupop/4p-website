import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import UserAlert from '../../common/ui/UserAlert'
import { closeModal } from '../modal/modalActions'

const Notifications = ({ newProfile }) => {
  const dispatch = useDispatch()
  const [currentNotifications, setCurrentNotifications] = useState(null)
  const notifications = newProfile
    ? [
        {
          priority: 'success',
          show: true,
          title: 'Welcome to 4pFoods',
          description:
            'Your cart is currently empty, but we have some seasonal recommendations that might fit your needs. Do you want to see?'
        }
      ]
    : []
  // const notifications = [
  //   {
  //     priority: 'danger',
  //     show: true,
  //     title: 'This is the Danger title',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. '
  //   },
  //   {
  //     priority: 'warning',
  //     show: true,
  //     title: 'This the warning title',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
  //   },
  //   {
  //     priority: 'info',
  //     show: true,
  //     title: 'This is the info title',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  //   }
  // ]

  useEffect(() => {
    setCurrentNotifications(notifications)
  }, [])

  if (!notifications) dispatch(closeModal())

  return (
    <div className="row mt-5">
      <div className="col-12">
        <div className="content">
          {currentNotifications &&
            currentNotifications.map((notification, index) => (
              <UserAlert
                key={index}
                title={notification.title}
                description={notification.description}
                priority={notification.priority}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

Notifications.propTypes = {}

export default Notifications
