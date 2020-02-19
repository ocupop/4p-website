import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ProductDetail from '../features/products/ProductDetail'

const Product = ({ data: { product } }) => {

  return (
    <>
      <ProductDetail product={product}/>
    </>
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
      }
    }
  }
`

Product.propTypes = {
  data: PropTypes.instanceOf(Object)
}

export default Product
