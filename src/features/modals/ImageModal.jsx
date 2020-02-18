import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import { Modal, Button } from 'react-bootstrap'


const ImageModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="link" onClick={handleShow}>
        <small>Nutrition Information</small>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>          
        </Modal.Header>
        <Modal.Body>
          <img src="https://via.placeholder.com/500x700" className="img-fluid" alt=""/>
        </Modal.Body>
      </Modal>
    </>
  )
}

// ImageModal.propTypes = {

// }

export default ImageModal