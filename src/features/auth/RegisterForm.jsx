import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import { useFirebase } from 'react-redux-firebase'
import { useDispatch } from 'react-redux'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import { Button } from 'react-bootstrap'
import { createNewUser, socialLogin } from '../auth/authActions'
import { closeModal, openModal } from '../modal/modalActions'
import { ZipCodeSelect, TextInput } from '../../common/fields'

// import FormikDebug from '../../common/utils/FormikDebug'

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
  const firebase = useFirebase()
  const dispatch = useDispatch()
  const initialValues = {
    registerZipCode: null
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
              try {
                createNewUser({ firebase, values })
                resetForm()
                dispatch(openModal('NotificationModal'))
              } catch (error) {
                console.log(error)
              }
            }}>
            {({ setFieldValue, values }) => (
              <Form>
                <Field
                  name="registerZipCode"
                  type="text"
                  component={ZipCodeSelect}
                  onChange={value => setFieldValue('registerZipCode', value)}
                  label="Enter Zipcode"
                  placeholder="Enter Zipcode"
                />

                {values.registerZipCode && (
                  <>
                    {values.registerZipCode.__isNew__ ? (
                      <div className="alert alert-info">
                        <p>
                          <strong>Sorry</strong> we currently do not cover your area.
                        </p>
                        <ul>
                          <li>Check drop-off lcoations nearby</li>
                          <li>Request coverage</li>
                          <li>Sign-up to mailing list to receive notifications when we expand our coverage area</li>
                        </ul>
                      </div>
                    ) : (
                      <>
                        <Field
                          name="email"
                          type="email"
                          component={TextInput}
                          placeholder="Enter Email"
                          label="Email"
                        />
                        <Field
                          name="password"
                          type="password"
                          component={TextInput}
                          placeholder="Enter Password"
                          label="Password"
                        />
                        <button type="submit" className="btn btn-primary btn-block btn-lg mt-3">
                          Sign-up
                        </button>

                        <div className="text-center my-4 mx-auto">
                          <small>
                            <em>or register with</em>
                          </small>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <Button
                              onClick={() => socialLogin({ firebase, provider: 'facebook' })}
                              className="btn btn-secondary btn-block">
                              Facebook
                            </Button>
                          </div>
                          <div className="col-lg-6">
                            <Button
                              onClick={() => socialLogin({ firebase, provider: 'google' })}
                              className="btn btn-secondary btn-block">
                              Google
                            </Button>
                          </div>
                        </div>
                      </>
                    )}
                  </>
                )}

                {/* <FormikDebug /> */}
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
