import React from 'react'
import { useDispatch } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'
import { closeModal } from './modalActions'

const ImageModal = ({ image }) => {
  const dispatch = useDispatch()

  return (
    <>
      <Modal show onHide={() => dispatch(closeModal())}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body><img src={image} className="img-fluid" /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => dispatch(closeModal())}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ImageModal