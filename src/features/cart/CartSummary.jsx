import React from 'react'
import { Dropdown } from 'react-bootstrap'

const CartSummary = () => {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <i className="ri-shopping-cart-fill mr-2"></i>$0.00
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <div className="cart-summary">
            <div className="p-3 text-center border-bottom">
              <p className="text-uppercase font-family-base mb-0"><small>Complete order by <span className="text-primary">Sunday</span></small></p>
            </div>
            <div className="p-3">
              <div className="row">
                <div className="col-3">
                  <div className="bg-image aspect-4x3"
                    style={{
                      backgroundImage: `url(https://via.placeholder.com/500x400)`,
                    }}>
                  </div>
                </div>
                <div className="col-6">
                  <p class="mb-0 text-uppercase font-headings"><strong>Item Title</strong></p>
                  <span className="text-uppercase"><small>Amount</small></span><br />
                  <span className="text-uppercase"><small>Qty: 2</small></span>
                </div>
                <div className="col-3">
                  <span className="product-price"><small><strong>$0.00</strong></small></span><br />
                </div>
              </div>
            </div>
            <hr className="my-0"/>
            <div className="p-3 text-center">
              <p className="text-uppercase font-family-base"><small>Add $0.00 to receive free delivery</small></p>
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
        </Dropdown.Menu>
      </Dropdown>
      
    </>
  )
}

export default CartSummary
