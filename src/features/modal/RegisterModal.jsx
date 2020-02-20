import React from 'react'
import { useFirebase } from 'react-redux-firebase'
import { useDispatch } from 'react-redux'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'

import { Modal, Button } from 'react-bootstrap'
import { closeModal } from './modalActions'
import { socialLogin } from "../auth/authActions"
import { CreateSelect } from '../../common/fields'

import logo from '../../common/assets/logo-vertical.svg'

const zipCodes = [
  { label: '94526', value: 94526 },
  { label: '90210', value: 90210 }
]

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

const RegisterModal = () => {
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
          <div className="row justify-content-center">
            <div className="col-8">
              <img src={logo} className="img-fluid" alt="4P Foods logo" />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="p-4">
                <p className="mb-4">We need to verify that you are in a 4pFoods service area.</p>
                <Formik
                  enableReinitialize
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={(values, { resetForm }) => {
                    console.log(values)
                    resetForm()
                  }}
                >
                  {({ setFieldValue, values }) => (
                    <Form>
                      <Field
                        name="zipCode"
                        type="text"
                        component={CreateSelect}
                        options={zipCodes}
                        onChange={value => setFieldValue("zipCode", value)}
                        label="Enter Zipcode"
                      />
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>

        </Modal.Body>
      </Modal>
    </>
  )
}

export default RegisterModal
