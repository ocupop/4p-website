import React from 'react'
// import PropTypes from 'prop-types'
// import { useFirebase } from 'react-redux-firebase'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
// import { socialLogin } from "../auth/authActions"
import { ZipCodeSelect } from '../../common/fields'

import FormikDebug from '../../common/utils/FormikDebug'

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .min(10, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required')
})

const RegisterForm = () => {
  // const firebase = useFirebase()
  const initialValues = {
    zipCode: null
  }

  return (
    <div className="row">
      <div className="col-12">
        <div className="p-4">
          <h2 className="text-center">Healthy, fresh food direct to your door</h2>
          <p className="my-3 mb-4 text-center">
            4P makes it easy to keep fresh food on your table, with weekly deliveries straight from local family farms.
            Enter your ZIP Code below to see if we deliver to your area.
          </p>
          <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              console.log(values)
              resetForm()
            }}>
            {({ setFieldValue, values }) => (
              <Form>
                <Field
                  name="zipCode"
                  type="text"
                  component={ZipCodeSelect}
                  onChange={value => setFieldValue('zipCode', value)}
                  label="Enter Zipcode"
                  placeholder="Enter Zipcode"
                />
                <FormikDebug />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

RegisterForm.propTypes = {}

export default RegisterForm
