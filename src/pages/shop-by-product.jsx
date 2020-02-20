import React from 'react'
import { useFirestoreConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import ProductList from '../features/product/ProductList'

const ProductsPage = () => {
  useFirestoreConnect('products')
  const products = useSelector(state => state.firestore.ordered.products)
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <div className="responsive-card-deck cards-md-3 cards-lg-4">
                  <ProductList products={products} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductsPage
