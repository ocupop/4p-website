import React, { useEffect, useState } from 'react'
import { useFirestoreConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import ProductList from '../features/product/ProductList'
import StoreNav from '../common/ui/StoreNav'

const ShopPage = () => {
  useFirestoreConnect('products')
  const products = useSelector(state => state.firestore.ordered.products)
  const [filteredProducts, setFilteredProducts] = useState([])
  const [filteredCollections, setFilteredCollections] = useState([])

  useEffect(() => {
    if (products) {
      setFilteredProducts(products.filter(product => !product.collection))
      setFilteredCollections(products.filter(product => product.collection))
    }
  }, [products])

  return (
    <>
      <StoreNav />
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
                  <ProductList products={filteredProducts} />
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
            <div className="col-12">
              <div className="content">
                <div className="responsive-card-deck cards-md-2">
                  <ProductList products={filteredCollections} />
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
