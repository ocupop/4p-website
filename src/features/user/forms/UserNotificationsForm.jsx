import React from 'react'
// import PropTypes from 'prop-types'
import { Field } from 'formik'
import { SwitchInput } from '../../../common/fields'

const UserNotificationsForm = () => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <h2>Notification Preferences</h2>
          <p>Describe the pupose</p>
          <div className="d-flex">
            <Field
              className="pr-4"
              name="notifications.email"
              type="checkbox"
              hint="Check here if you would like notifications sent to your email address"
              component={SwitchInput}
              onChange={value => setFieldValue('notifications.email', !value)}
              label="Email"
            />
          </div>
        </div>
      </div>
    </>
  )
}

UserNotificationsForm.propTypes = {}

export default UserNotificationsForm
