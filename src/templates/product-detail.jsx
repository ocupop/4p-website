/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/ui/Header'
import Footer from '../components/ui/Footer'

const ProductDetail = ({ data }) => {
  return (
    <>
      <div>
        <Header siteTitle="Product" />
        <h1>{data.allProducts.edges[0].node.name}</h1>
        <Footer siteTitle="Product" />
      </div>
    </>
  )
}

export const query = graphql`
  query($id: String!) {
    allProducts(filter: { id: { eq: $id } }) {
      edges {
        node {
          id
          department
          name
          variants {
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

export default ProductDetail
