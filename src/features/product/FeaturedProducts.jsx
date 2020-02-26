import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import ProductCard from './ProductCard'

const FeaturedProducts = ({ vendorid: vendorID }) => {
  const whereClause = [['featured', '==', true]]

  if (vendorID) {
    whereClause.push(['vendor.value', '==', vendorID])
  }

  const featuredProducts = 'featuredProducts'
  useFirestoreConnect([
    {
      collection: 'products',
      where: whereClause,
      limit: 3,
      storeAs: featuredProducts
    }
  ])

  const products = useSelector(state => {
    const featuredProductsObject = state.firestore.data[featuredProducts]
    const productsObject = []
    if (featuredProductsObject) {
      Object.keys(featuredProductsObject).forEach(function(item) {
        productsObject.push({ id: item, ...featuredProductsObject[item] })
      })
    }

    return productsObject
  })

  return (
    <>
      <section id="featured-store" className="pt-0 position-relative">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="responsive-card-deck cards-lg-3">
                {products && products.map(product => <ProductCard product={product} key={product.id} />)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

FeaturedProducts.propTypes = {
  vendorid: PropTypes.string
}

export default FeaturedProducts
