import React from 'react'
// import PropTypes from 'prop-types'
import { useFirebase } from 'react-redux-firebase'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import { Button } from 'react-bootstrap'
import { TextInput } from '../../common/fields'
import { socialLogin, login } from './authActions'

const initialValues = {
  email: '',
  password: ''
}

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

const LoginForm = () => {
  const firebase = useFirebase()
  return (
    <div className="row">
      <div className="col-12">
        <div className="p-4">
          <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              login({ firebase, values })
              resetForm()
            }}>
            {() => (
              <Form>
                <Field
                  name="email"
                  type="email"
                  component={TextInput}
                  placeholder="Enter Email"
                  hint="Enter Email"
                  label="Email"
                />
                <Field
                  name="password"
                  type="password"
                  component={TextInput}
                  placeholder="Enter Password"
                  hint="Enter Password"
                  label="Password"
                />
                <button type="submit" className="btn btn-mid btn-block" disabled>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
          <p className="my-3">
            <button type="button" className="btn btn-transparent p-0" disabled>
              <em>Forgot Your Password?</em>
            </button>
          </p>
          <p className="text-uppercase">or sign in with</p>
          <div className="row">
            <div className="col-lg-6">
              <Button
                onClick={() => socialLogin({ firebase, provider: 'facebook' })}
                className="btn btn-mid btn-block"
                disabled>
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
          <p className="mt-3">
            New to 4P Foods?{' '}
            <button type="button" className="btn btn-transparent text-mid" disabled>
              <em>Sign up here</em>
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

LoginForm.propTypes = {}

export default LoginForm
