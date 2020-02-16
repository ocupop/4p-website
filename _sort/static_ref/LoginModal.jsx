import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import { Modal, Button } from 'react-bootstrap'


const LoginModal = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  return (
    <>
      <Button variant="primary" onClick={handleShowLogin}>
        Launch demo modal
      </Button>
      <Modal show={showLogin} onHide={handleCloseLogin}>
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body-content">
            <img src="/assets/img/logo-vertical.svg" className="img-fluid logo" alt="4P Foods logo" />
            <h1>Welcome back!<br />We're glad to see you.</h1>
            <div className="form-group">
              <label for="user-email" className="sr-only">Email</label>
              <input type="email" className="form-control" id="user-email" placeholder="Enter email address" />
              <label for="account-password" className="sr-only">Enter Password</label>
              <input type="password" className="form-control" id="account-password" placeholder="Enter Password" />
              <button className="btn btn-secondary btn-block">Enter Password</button>
              <p className="mb-3 text-secondary mt-3"><button className="btn btn-link">Forgot Your Password?</button></p>
              <p className="text-uppercase">or sign in with</p>
              <div className="row">
                <div className="col-lg-6">
                  <a href="#" className="btn btn-secondary btn-block">Facebook</a>
                </div>
                <div className="col-lg-6">
                  <a href="#" className="btn btn-secondary btn-block">Google</a>
                </div>
              </div>
              <p className="mt-3">New to 4P Foods? <button className="btn btn-link text-secondary "><em>Sign up here</em></button></p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

{/* // TestModal.propTypes = {

// } */}

export default LoginModal