import React from 'react'

const CartSummary = () => {
  return (
    <>
      
      <div className="cart-summary">
        <div className="content text-center border-bottom">
          <p className="text-uppercase font-family-base mb-0">Complete order by <span className="text-primary">Sunday</span></p>
        </div>
        <div className="cart-summary-item">
          <div className="row">
            <div className="col-3">
              <div className="bg-image aspect-4x3"
                style={{
                  backgroundImage: `url(https://via.placeholder.com/500x400)`,
                }}>
              </div>
            </div>
            <div className="col-6">
              <h2>Item Title</h2>
              <span className="text-uppercase text-light">Amount</span><br/>
              <span className="text-uppercase text-light">Qty: 2</span>
            </div>
            <div className="col-3">
              <span className="product-price">$0.00</span><br/>
            </div>
          </div>
        </div>
        <div className="content text-center">
          <p className="text-uppercase font-family-base">Add $0.00 to receive free delivery</p>
          <div className="progress">
            <div className="progress-bar bg-secondary" role="progressbar"
              style={{
                width: `50%`
              }}
              aria-valuenow="50" 
              aria-valuemin="0"
              aria-valuemax="100"></div>
            </div>
          </div>
        </div>
    </>
  )
}

export default CartSummary
