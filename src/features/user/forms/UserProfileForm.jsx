import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
// import { useFirebase, isLoaded, isEmpty } from 'react-redux-firebase'
// import LoadingComponent from '../../common/ui/LoadingComponent'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'

import {
  TextInput,
  TextArea,
  SwitchInput,
  SelectInput,
  PhoneInput,
  ZipCodeSelect,
  AddressInput
} from '../../../common/fields'
import { stateOptions } from '../../../common/data/selects'
import { zipOptions } from '../../../common/data/ZIPS'

import FormikDebug from '../../../common/utils/FormikDebug'

const ProfileSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required')
})

const UserProfileForm = ({ profile }) => {
  const [showAddressField, setShowAddressField] = useState(false)
  const dispatch = useDispatch()
  const {
    displayName,
    photoURL,
    firstName,
    lastName,
    dietaryRestrictions,
    emailNotifications,
    smsNotifications,
    email,
    phone,
    role,
    billingAddress,
    deliveryAddress,
    deliveryLocation
  } = profile

  const initialValues = {
    displayName,
    photoURL,
    firstName,
    lastName,
    dietaryRestrictions,
    emailNotifications,
    smsNotifications,
    email,
    phone,
    role,
    billingAddress,
    deliveryAddress,
    deliveryLocation
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
              <hr />
              <h3>Delivery Address</h3>
              <p>Describe the coverage areas and options for delivery...</p>
              <button
                type="button"
                className="btn btn-transparent text-primary p-0"
                onClick={() => setShowAddressField(!showAddressField)}>
                {showAddressField ? <small>Search location</small> : <small>Enter address details</small>}
              </button>

              <hr />
              {showAddressField ? (
                <div className="row">
                  <div className="col-12">
                    <Field
                      name="street_1"
                      type="text"
                      component={TextInput}
                      placeholder="Street Address"
                      label="Address"
                    />
                    <Field name="street_2" type="text" component={TextInput} placeholder="Suite/Apartment #" />
                  </div>
                  <div className="col-12 col-md-6">
                    <Field name="city" type="text" component={TextInput} placeholder="City" />
                  </div>
                  <div className="col-12 col-md-2">
                    <Field name="state" type="text" component={SelectInput} options={stateOptions} />
                  </div>
                  <div className="col-12 col-md-4">
                    <Field
                      name="zip"
                      type="text"
                      component={ZipCodeSelect}
                      options={zipOptions}
                      onChange={value => {
                        setFieldValue('zip', value)
                        // TODO: Set error messagin for out of coverage
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div className="row">
                  <div className="col-12">
                    <Field
                      name="deliveryAddress"
                      className="locationField"
                      hint="Start typing address or location name."
                      component={AddressInput}
                      locationField="deliveryLocation"
                      onChange={value => setFieldValue('deliveryAddress', value)}
                      placeholder="Enter Address..."
                      label="Location"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12">
              <hr />
              <h3>Notification Preferences</h3>
              <p>Describe the notification expectations...</p>
              <hr />
              <div className="d-flex">
                <Field
                  className="pr-4"
                  name="emailNotifications"
                  type="checkbox"
                  hint="Check here if you would like notifications sent to your email address"
                  component={SwitchInput}
                  toggle
                  onChange={() => setFieldValue('emailNotifications', !values.emailNotifications)}
                  label="Email"
                />
                <Field
                  className="pr-4"
                  name="smsNotifications"
                  type="checkbox"
                  hint="Check here if you would like notifications sent to your phone"
                  component={SwitchInput}
                  toggle
                  onChange={() => setFieldValue('smsNotifications', !values.smsNotifications)}
                  label="SMS"
                />
              </div>
            </div>
          </div>
          <button type="button" className="btn btn-secondary text-white btn-block">
            Update
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
