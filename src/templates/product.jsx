/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import ProductDetail from '../features/products/ProductDetail'

const Product = ({ data: {product} }) => {
  return (
    <ProductDetail product={product} />
  )
}

export const query = graphql`
  query($id: String!) {
    product( id: { eq: $id }) {
      id
      name
      variants {
        label
        name
      }
    }
  }
`

export default Product
