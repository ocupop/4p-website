import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
// import { useFirebase, isLoaded, isEmpty } from 'react-redux-firebase'
// import LoadingComponent from '../../common/ui/LoadingComponent'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'

import { TextInput, TextArea, SwitchInput, SelectInput, RadioInput } from '../../../common/fields'

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
