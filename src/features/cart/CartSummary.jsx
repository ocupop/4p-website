import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Dropdown, Button } from 'react-bootstrap'
import { openModal } from '../modal/modalActions'
import CartSummaryItem from './CartSummaryItem'


const CartSummary = () => {
  const cart = useSelector(state => state.firebase.profile.shoppingCart)
  const dispatch = useDispatch()

  return (
    <>
    {!cart ? (
        <Button
          onClick={() => dispatch(openModal('RegisterModal'))}
          className="btn btn-primary">Sign-Up</Button>
    ) : (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <i className="ri-shopping-cart-fill mr-2"/> ${cart.cartPrice}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <div className="cart-summary">
            <div className="p-3 text-center border-bottom">
              <p className="text-uppercase font-family-base mb-0"><small>Complete order by <span className="text-primary">Sunday</span></small></p>
            </div>
            <div className="p-3">
              {cart.items.length > 0 ? (
                cart.items.map(item => <CartSummaryItem item={item} />)
              ) : (
                <p>Uh Oh! Your cart is empty...</p>
              )}
            </div>
            <hr className="my-0" />
            <div className="p-3 text-center">
              <p className="text-uppercase font-family-base"><small>Add $0.00 to receive free delivery</small></p>
              <div className="progress">
                {/* @TODO: Replace with progress bar component from React Bootstrap */}
                {/* <div
                  className="progress-bar bg-secondary"
                  role="progressbar"
                  style={{
                    width: `50%`
                  }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"></div> */}
              </div>
            </div>
            <hr className="my-0" />
            <div className="p-3 text-center">
              <a href="/cart" className="text-uppercase font-family-base mb-0"><small><span className="text-primary">View and edit cart</span></small></a>
            </div>
          </div>
        </Dropdown.Menu>
      </Dropdown >
    )}


    </>
  )
}

export default CartSummary
