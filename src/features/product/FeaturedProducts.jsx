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

  useFirestoreConnect([
    {
      collection: 'products',
      where: whereClause,
      limit: 3
    }
  ])

  const products = useSelector(state => state.firestore.ordered.products)

  return (
    <section id="featured-store" class="pt-0 position-relative">
      <div class="container">
        <div class="row">
          {products &&
            products.map(product => (
              <div class="col">
                <ProductCard product={product} key={product.id} />
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

FeaturedProducts.propTypes = {
  vendorid: PropTypes.string
}

export default FeaturedProducts
