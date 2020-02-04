/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import ProductDetail from '../features/products/ProductDetail'

const Product = ({ data: {products} }) => {
  const product = products

  return (
    <ProductDetail product={product} />
  )
}

export const query = graphql`
  query($id: String!) {
    products( id: { eq: $id }) {
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
        tags
      }
    }
  }
`

export default Product
