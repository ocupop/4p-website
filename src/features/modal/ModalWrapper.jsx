/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react'
// import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import TestModal from './TestModal'
import ImageModal from './ImageModal'

const modalLookup = {
  TestModal,
  ImageModal
  // LoginModal,
  // RegisterModal,
  // UnauthModal
}

const ModalWrapper = () => {
  const currentModal = useSelector(state => state.modals)

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
