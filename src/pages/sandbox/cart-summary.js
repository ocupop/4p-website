import React from 'react'
import CartSummary from '../../features/cart/CartSummary'
import Sandbox from '../../containers/Sandbox'

const cartSummarySandbox = () => {
  return (
    <Sandbox>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <CartSummary />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{
        paddingBottom: `500px`,
      }} />
    </Sandbox>
  )
}

export default cartSummarySandbox
