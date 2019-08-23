import React, { useContext } from 'react'

import StoreContext from '../StoreContext'
import LineItem from './LineItem'

const Cart = () => {
  const context = useContext(StoreContext)
  const { checkout } = context

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const line_items = checkout.lineItems.map(line_item => {
    return <LineItem key={line_item.id.toString()} line_item={line_item} />
  })

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-9">
            <ul>
              {line_items}
            </ul>
          </div>
          <div className="col-12 col-sm-3">
            <h2>Subtotal</h2>
            <p>$ {checkout.subtotalPrice}</p>
            <br />
            <h2>Taxes</h2>
            <p>$ {checkout.totalTax}</p>
            <br />
            <h2>Total</h2>
            <p>$ {checkout.totalPrice}</p>
            <br />
            <button onClick={handleCheckout}>Check out</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart
