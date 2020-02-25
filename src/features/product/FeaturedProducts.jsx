import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'

const FeaturedProducts = ({ vendorID }) => {
  // useFirestoreConnect([`products/${productID}`], [productID]) // sync /products/:id from firestore into redux
  // const activeProduct = useSelector(
  //   ({
  //     firestore: {
  //       data: { products }
  //     }
  //   }) => products && products[productID]
  // )

  useFirestoreConnect('products')
  const products = useSelector(state => {
    console.log(state.firestore.ordered)
    // state.firestore.ordered.products
  })

  useEffect(() => {
    if (vendorID) {
      // we need to use these featured products
    } else {
    }
  }, [])

  return (
    <section id="featured-store" class="pt-0 position-relative">
      <div class="container">
        <div class="row">
          <h1>2020-02-25-07:32:46 Featured Producuts</h1>
        </div>
      </div>
    </section>
  )
}

FeaturedProducts.propTypes = {
  vendorId: PropTypes.string
}

export default FeaturedProducts
