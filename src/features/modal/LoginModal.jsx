import React from 'react'
import { useFirebase } from 'react-redux-firebase'
import { useDispatch } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'
import { closeModal } from './modalActions'
import { loginWithGoogle } from '../auth/authActions'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import { TextInput } from '../../common/fields'


const ValidationSchema = Yup.object().shape({
  content: Yup.string()
    .min(10, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
})

const LoginModal = () => {
  const dispatch = useDispatch()
  const firebase = useFirebase()
  const initialValues = {}
  return (
    <>
      <Modal show onHide={() => dispatch(closeModal())}>
        <Modal.Body>
          <div className="modal-body-content">
            <img src="/img/logo-vertical.svg" className="img-fluid logo" alt="4P Foods logo" />
            {/* TODO: Add Email/Password */}
            <Formik
              enableReinitialize
              initialValues={initialValues}
              validationSchema={ValidationSchema}
            // onSubmit={(values, { resetForm }) => {
            //   dispatch(testForm({ firestore }, values))
            //   resetForm()
            // }}
            >
              {({ values, setFieldValue }) => (
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
                    type="text"
                    component={TextInput}
                    placeholder="Enter Password"
                    hint="Enter Password"
                    label="Password"
                  />
                  <button type="submit" className="btn btn-secondary btn-block">Submit</button>
                </Form>
              )}
            </Formik>
            <div className="loader"></div>
            <i className="ri-loader-4-line"></i>
            <p className="my-3"><button className="btn btn-link"><em>Forgot Your Password?</em></button></p>
            <p className="text-uppercase">or sign in with</p>
            <div className="row">
              <div className="col-lg-6">
                <button className="btn btn-secondary btn-block">Facebook</button>
              </div>
              <div className="col-lg-6">
                <Button onClick={() => dispatch(loginWithGoogle({ firebase }))} className="btn btn-secondary btn-block">Google</Button>
              </div>
            </div>
            <p className="mt-3">New to 4P Foods? <button className="btn btn-link text-secondary "><em>Sign up here</em></button></p>
            {/* <Button onClick={() => loginWithFacebook()}>Facebook</Button> */}
            {/* <Button onClick={() => loginWithGithub()}>Github</Button> */}
            {/* <Button onClick={() => console.log("Needs firebase configuration")}>Phone</Button> */}
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default LoginModal
