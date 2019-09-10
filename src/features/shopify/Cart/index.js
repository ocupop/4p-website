import React, { useContext } from 'react'

import StoreContext from '../StoreContext'
import LineItem from './LineItem'

export const Cart = () => {
  const context = useContext(StoreContext)
  const { checkout } = context

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const lineItems = checkout.lineItems.map(item => {
    return <LineItem key={item.id.toString()} line_item={item} />
  })

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-9">
            <ul>
              {lineItems}
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
            <button type="button" onClick={handleCheckout}>Check out</button>
          </div>
        </div>
      </div>
    </section>
  )
}

