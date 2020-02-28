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

  const products = useSelector(state => state.firestore.ordered.featuredProducts)

  return (
    <>
      <div className="responsive-card-deck cards-lg-3">
        {products && products.map(product => <ProductCard product={product} key={product.id} />)}
      </div>
    </>
  )
}

FeaturedProducts.propTypes = {
  vendorid: PropTypes.string
}

export default FeaturedProducts
