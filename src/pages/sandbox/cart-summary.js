import React from 'react'
import CartSummary from '../../features/cart/CartSummary'

const cartSummarySandbox = () => {
  return (
    <>
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
    </>
  )
}

export default cartSummarySandbox
