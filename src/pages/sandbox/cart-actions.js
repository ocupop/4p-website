import React from 'react'
import { useFirestoreConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import AddToCart from '../../features/cart/AddToCart'
import RemoveFromCart from '../../features/cart/RemoveFromCart'

const CartActions = () => {
  useFirestoreConnect('products')
  const product = useSelector(state => state.firestore.ordered.products && state.firestore.ordered.products[0])

  // Change this if you need the variant changed.
  const activeVariant = product && product.variants[1]
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Example of Add To Cart Button</h2>
              <div>{JSON.stringify(activeVariant, null, 2)}</div>

              {product && <AddToCart productId={product.id} item={activeVariant} />}
              <br />
              {product && <RemoveFromCart item={activeVariant} />}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CartActions
