import React, { Component, useContext, useState, useEffect } from 'react'
import { Link } from 'gatsby'

import StoreContext from '../../context/StoreContext'

const countQuantity = lineItems => {
  let quantity = 0

  lineItems.forEach(item => {
    quantity = quantity + item.quantity
  });

  return quantity
}


export default class CartSummary extends Component {
  render() {
    const context = useContext(StoreContext)
    const { checkout } = context
    const [quantity, setQuantity] = useState(countQuantity(checkout ? checkout.lineItems : []))

    useEffect(() => {
      setQuantity(countQuantity(checkout ? checkout.lineItems : []));
    }, [checkout]);

    return (
      <Link to='/cart'>
        {quantity !== 0 &&
          <span>
            {quantity}
          </span>
        }
        Cart 🛍
      </Link>
    )
  }
}
