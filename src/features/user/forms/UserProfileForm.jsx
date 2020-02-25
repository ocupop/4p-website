import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
// import { useFirebase, isLoaded, isEmpty } from 'react-redux-firebase'
// import LoadingComponent from '../../common/ui/LoadingComponent'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'

import { TextInput, TextArea, SwitchInput, SelectInput, RadioInput, PhoneInput } from '../../../common/fields'

import FormikDebug from '../../../common/utils/FormikDebug'

const ProfileSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required')
})

const UserProfileForm = ({ profile }) => {
  const dispatch = useDispatch()
  const {
    displayName,
    photoURL,
    firstName,
    lastName,
    dietaryRestrictions,
    notifications,
    email,
    phone,
    role,
    billingAddress
  } = profile

  const initialValues = {
    displayName,
    photoURL,
    firstName,
    lastName,
    dietaryRestrictions,
    notifications,
    email,
    phone,
    role,
    billingAddress
  }

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={ProfileSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values)
        // dispatch(testForm({ firestore }, values))
        resetForm()
      }}>
      {({ values, setFieldValue }) => (
        <Form>
          <div className="row">
            <div className="col-6">
              <Field
                name="firstName"
                type="text"
                component={TextInput}
                // hint=""
                placeholder="First Name..."
                label="First Name"
              />
            </div>
            <div className="col-6">
              <Field
                name="lastName"
                type="text"
                component={TextInput}
                // hint="Enter your last name"
                placeholder="Last Name..."
                label="Last Name"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-sm-6">
              <Field
                name="phoneNumber"
                type="text"
                // hint="Enter the primary contact person's details"
                component={PhoneInput}
                placeholder="(___) ___-____"
                label="Phone"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <Field
                name="dietaryRestrictions"
                type="text"
                hint="Please include any allergies or details that we should be aware of."
                component={TextArea}
                onChange={value => setFieldValue('dietaryRestrictions', value)}
                label="Dietary Restrictions"
              />
            </div>
          </div>
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
          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
          <FormikDebug />
        </Form>
      )}
    </Formik>
  )
}

UserProfileForm.propTypes = {
  profile: PropTypes.instanceOf(Object)
}

export default UserProfileForm
