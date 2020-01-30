import React from 'react'
import Header from '../components/ui/header'
import Footer from '../components/ui/footer'
import ProductItem from '../components/products/ProductItem'
import ProductVariant from '../components/products/ProductVariant'

const ShopHome = ({ data }) => {
  const mustardProduct = data.allProducts.edges[0].node
  return (
    <div>
      <Header siteTitle="Shop Home" />
      <h1>ShopHome</h1>
      <h2>Suggested Goods</h2>
      <ProductVariant variant={mustardProduct.variants[0] } />
      <h2>Collections</h2>
      <ProductItem product={mustardProduct } />
      
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

export default ShopHome
