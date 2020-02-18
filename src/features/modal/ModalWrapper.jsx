/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react'
// import PropTypes from 'prop-types'
import TestModal from './TestModal'

const modalLookup = {
  TestModal
  // LoginModal,
  // RegisterModal,
  // UnauthModal
}

const ModalWrapper = ({ currentModal }) => {
  if (currentModal) {
    const { modalType, modalProps } = currentModal
    const ModalComponent = modalLookup[modalType]
    return <ModalComponent {...modalProps} />
  }
  return <span>Need Modal Content</span>
}

ModalWrapper.propTypes = {

}

export default ModalWrapper
