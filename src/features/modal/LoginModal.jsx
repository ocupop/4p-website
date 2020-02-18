import React from 'react'
import { useFirebase } from 'react-redux-firebase'
import { useDispatch } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'
import { closeModal } from './modalActions'
import { loginWithGoogle } from '../auth/authActions'


const LoginModal = () => {
  const dispatch = useDispatch()
  const firebase = useFirebase()

  return (
    <>
      <Modal show onHide={() => dispatch(closeModal())}>
        <Modal.Body>
          {/* TODO: Add Email/Password */}
          <Button onClick={() => dispatch(loginWithGoogle({ firebase }))}>Google</Button>
          {/* <Button onClick={() => loginWithFacebook()}>Facebook</Button> */}
          {/* <Button onClick={() => loginWithGithub()}>Github</Button> */}
          {/* <Button onClick={() => console.log("Needs firebase configuration")}>Phone</Button> */}
        </Modal.Body>
      </Modal>
    </>
  )
}

export default LoginModal
