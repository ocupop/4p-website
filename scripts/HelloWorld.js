import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'

const HelloWorld = () => {

  return (
    <>
      <h1>Hello World</h1>
    </>
  )
}

HelloWorld.propTypes = {
  category: PropTypes.string
}

export default HelloWorld
