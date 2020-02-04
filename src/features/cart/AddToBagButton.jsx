import React from 'react'
import PropTypes from 'prop-types'

const AddToBagButton = ({ children, handleOnClick=()=>{} }) => {
  return (
    <>
      <button
        type="button"
        className="product-button w-50"
        onClick={() => handleOnClick()}>
        {children}
      </button>
    </>
  )
}

AddToBagButton.propTypes = {
  children: PropTypes.node,
  handleOnClick: PropTypes.func,
}

export default AddToBagButton
