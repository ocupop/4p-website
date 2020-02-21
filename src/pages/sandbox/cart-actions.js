import React from 'react'
import { useFirestoreConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import AddToCart from '../../features/cart/AddToCart'

const CartActions = () => {
  useFirestoreConnect('products')
  const product = useSelector(state => state.firestore.ordered.products && state.firestore.ordered.products[0])

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Example of Add To Cart Button</h2>
              {product && <AddToCart productId={product.id} item={product.variants[0]} />}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CartActions
