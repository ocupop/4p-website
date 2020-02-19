import React from 'react'
import { useFirebase } from 'react-redux-firebase'
import { useDispatch } from 'react-redux'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'

import { Modal, Button } from 'react-bootstrap'
import { closeModal } from './modalActions'
import { socialLogin } from "../auth/authActions"
import { TextInput } from '../../common/fields'


const validationSchema = Yup.object().shape({
  email: Yup.string()
    .min(10, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
})

const LoginModal = () => {
  const dispatch = useDispatch()
  const firebase = useFirebase()
  const initialValues = {
    email: null,
    password: null
  }

  return (
    <>
      <Modal show onHide={() => dispatch(closeModal())}>
        <Modal.Body>
          <div className="modal-body-content">
            <img src="/img/logo-vertical.svg" className="img-fluid logo" alt="4P Foods logo" />

            <Formik
              enableReinitialize
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                console.log(values)
                resetForm()
              }}
            >
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
                  <button type="submit" className="btn btn-secondary btn-block">Submit</button>
                </Form>
              )}
            </Formik>
            {/* <div className="loader">
              <i className="ri-loader-4-line"/>
            </div> */}
            <p className="my-3">
              <button type="button" className="btn btn-link"><em>Forgot Your Password?</em></button>
            </p>
            <p className="text-uppercase">or sign in with</p>
            <div className="row">
              <div className="col-lg-6">
                <button type="button" className="btn btn-secondary btn-block">Facebook</button>
              </div>
              <div className="col-lg-6">
                <Button onClick={() => socialLogin({ firebase, provider: 'google' })} className="btn btn-secondary btn-block">Google</Button>
              </div>
            </div>
            <p className="mt-3">
              New to 4P Foods? <button type="button" className="btn btn-link text-secondary "><em>Sign up here</em></button>
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default LoginModal
