import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import TestModal from './modals/TestModal'

const FirebaseSandbox = () => {
  const [user, setUser] = useState({
    name: 'Tom'
  })



  return (
    <>
      <p>Hello {user ? user.name : "there"}</p>
      <TestModal/>
    </>
  )
}

// FirebaseSandbox.propTypes = {

// }

export default FirebaseSandbox
