import React from 'react'
// import PropTypes from 'prop-types'
import Layout from '../containers/Layout'
import CartDashboard from '../features/cart/CartDashboard'

const cart = () => {
  return (
    <Layout>
      <CartDashboard />
    </Layout>
  )
}

cart.propTypes = {

}

export default cart
