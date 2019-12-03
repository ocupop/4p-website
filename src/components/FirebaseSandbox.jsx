import React, { useState } from 'react'
import PropTypes from 'prop-types'

const FirebaseSandbox = props => {
  const [user, setUser] = useState({
    name: 'Tom'
  })



  return (
    <>
      <p>Hello {user ? user.name : "there"}</p>
    </>
  )
}

FirebaseSandbox.propTypes = {

}

export default FirebaseSandbox
