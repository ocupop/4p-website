import React from 'react'
import { useFirestoreConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import ProductList from '../features/products/ProductList'

const ShopPage = () => {
  useFirestoreConnect('products')
  const products = useSelector(state => state.firestore.ordered.products)
  // console.log(products)
  return (
    
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h1>Suggested Goods</h1>
              </div>
            </div>
          </div>
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
      
      <section className="pt-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h1>Collections</h1>
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            {/* TODO loop through collections, show 2 */}
            <div className="col-12">
              <div className="content">
                <div className="responsive-card-deck cards-md-2">
                  <ProductList products={products} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h2>Recently Added</h2>
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            {/* TODO loop through recently added products */}
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

export default ShopPage
