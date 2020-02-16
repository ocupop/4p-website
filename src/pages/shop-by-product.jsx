import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../containers/Layout'
import ProductList from '../features/products/ProductList'

const products = ({ data: { allProduct: { edges: products } } }) => {

  return (
    <Layout>
      <ProductList products={products} />
    </Layout>
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
          category
          department
          ingredients
          tags {
            label
            value
          }
          variants {
            size
            label
            price
          }
          vendor {
            name
          }
        }
      }
    }
  }
`

export default products
