import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ProductDetail from '../features/products/ProductDetail'
import Layout from '../containers/Layout'

const Product = ({ data: {product} }) => {

  return (
    <Layout>
      <ProductDetail product={product}/>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    product( id: { eq: $id }) {
      id
      name
      category
      department
      ingredients
      storageTips
      tags {
        label
        value
      }
      vendor {
        name
        website
        description
        featuredImage {
          src
        }
      }
    }
  }
`

Product.propTypes = {
  data: {
    product: PropTypes.instanceOf(Object),
  }
}

export default Product
