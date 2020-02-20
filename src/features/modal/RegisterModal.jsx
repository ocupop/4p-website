import React from 'react'
import { useDispatch } from 'react-redux'
import { Modal } from 'react-bootstrap'
import { closeModal } from './modalActions'
import RegisterForm from '../auth/RegisterForm'
import logo from '../../common/assets/logo-vertical.svg'



const RegisterModal = () => {
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

          <RegisterForm/>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default RegisterModal
