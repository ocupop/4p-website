import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/ui/header'
import Footer from '../components/ui/footer'
import ProductVariant from '../components/products/ProductVariant'

const ProductList = ({ data }) => {
  return (
    <div>
      <Header siteTitle="Shop Home" />
      <h1>Showing Product List</h1>
      {data.allProducts.edges.map(products => {
        return products.node.variants.map(variant => {
          return <ProductVariant key={variant.sku} variant={variant} />
        })
      })}

      <Footer siteTitle="Shop Home" />
    </div>
  )
}

export const query = graphql`
  {
    allProducts {
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

export default ProductList
