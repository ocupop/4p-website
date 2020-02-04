import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ProductList from '../features/products/ProductList'

const products = ({ data: { allProduct: { edges } } }) => {
  const products = edges
  return (
    <>
      <ProductList products={products} />
    </>
  )
}

products.propTypes = {
  data: PropTypes.instanceOf(Object),
}

export const query = graphql`
  {
    allProduct {
      edges {
        node {
          id
          department
          name
          variants {
            size
            unit
            price
            available
            nutritionalLabel
            description
            storageTips
            label
            name
            featuredImage
            quantity
            sku
            nutritionalFacts
          }
        }
      }
    }
  }
`

export default products
