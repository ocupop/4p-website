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
          name
          variants {
            size
            unit
            price
            label
            name
            sku
          }
        }
      }
    }
  }
`

export default products
