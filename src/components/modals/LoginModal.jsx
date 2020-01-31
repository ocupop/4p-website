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
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseLogin}>
            Close
            </Button>
          <Button variant="primary" onClick={handleCloseLogin}>
            Save Changes
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

// TestModal.propTypes = {

// }

export default LoginModal