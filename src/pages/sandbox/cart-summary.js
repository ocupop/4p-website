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
                <button class="btn btn-primary">Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CartSummary/>
    </>
  )
}

export default cartSummarySandbox
