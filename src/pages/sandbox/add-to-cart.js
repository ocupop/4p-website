import React from 'react'
import { useFirestoreConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import AddToCart from '../../features/cart/AddToCart'

const AddToCartPage = () => {
  useFirestoreConnect('products')
  const product = useSelector(state => state.firestore.ordered.products)

  const activeProduct = product && product[0]
  const activeVariant = activeProduct && activeProduct.variants[0]

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Example of Add To Cart Button</h2>
              <AddToCart productId={activeProduct && activeProduct.id} item={activeVariant} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AddToCartPage
