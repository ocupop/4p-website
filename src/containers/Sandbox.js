import React from 'react'
import PropTypes from 'prop-types'
import HEAD from "../common/ui/Head"
import Header from '../common/ui/Header'
import Footer from '../common/ui/Footer'
import 'remixicon/fonts/remixicon.css'
import '../../content/_scss/main.scss'

function Sandbox({ children }) {

  return (
    <>
      <HEAD />
      {/* {props.location.pathname === '/' ? '' : ''} */}
      <Header />

      <main id="pageContent">
        {children}
      </main>

      <Footer />
    </>
  )
}

Sandbox.propTypes = {
  children: PropTypes.node.isRequired,
  // location: PropTypes.object.isRequired,
}

export default Sandbox


