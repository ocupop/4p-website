import React from 'react'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import { useDispatch, useSelector } from 'react-redux'
import { Modal } from 'react-bootstrap'
import { closeModal } from './modalActions'
import RegisterForm from '../auth/RegisterForm'
import Notifications from '../user/Notifications'
import logo from '../../common/assets/logo-vertical.svg'

const RegisterModal = () => {
  const auth = useSelector(state => state.firebase.auth)
  const profile = useSelector(state => state.firebase.profile)
  const dispatch = useDispatch()

  return (
    <>
      <Modal show onHide={() => dispatch(closeModal())}>
        <Modal.Body>
          <div className="row justify-content-center">
            <div className="col-8">
              <img src={logo} className="img-fluid" alt="4P Foods logo" />
            </div>
          </div>
          {!isLoaded(auth) ? (
            <LoadingComponent inverted />
          ) : isEmpty(profile) ? (
            <RegisterForm />
          ) : (
            <Notifications newProfile={true} />
          )}
        </Modal.Body>
      </Modal>
    </>
  )
}

export default RegisterModal
