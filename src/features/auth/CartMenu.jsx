import React from 'react'
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import LoadingComponent from '../../common/ui/LoadingComponent'
import CartSummary from "../cart/CartSummary"

const CartMenu = () => {
  const auth = useSelector(state => state.firebase.auth)
  return (
    <>
      {!isLoaded(auth) ? (
        <LoadingComponent />
      ) : (
          isEmpty(auth)
            ? <></>
            : <CartSummary auth={auth} />
        )}
    </>
  )
}

export default CartMenu