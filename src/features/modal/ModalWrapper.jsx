import React from 'react'
// import PropTypes from 'prop-types'
import TestModal from './TestModal'

const modalLookup = {
  TestModal
  // LoginModal,
  // RegisterModal,
  // UnauthModal
}

const ModalWrapper = ({ currentModal: { modalType, modalProps } }) => {
  if (modalType) {
    const ModalComponent = modalLookup[modalType]
    return <ModalComponent {...modalProps} />
  }
  return <span>Need Modal Content</span>
}

ModalWrapper.propTypes = {

}

export default ModalWrapper
