import React from 'react'
import Header from '../components/ui/Header'
import Footer from '../components/ui/Footer'
import Tag from '../components/ui/Tag'
import ProductVariant from '../components/products/ProductVariant'

const ProductDetail = ({ data }) => {
  const mustardProduct = data.allProducts.edges[0].node
  return (
    <div>
      <Header siteTitle="Shop Home" />
      <h1>Showing Product Detail</h1>
      <h2>Product Details</h2>
      <Tag name="Tag1" />
      <Tag name="Tag2" />
      <Tag name="Tag3" />
      <h2>We Recommend</h2>
      {mustardProduct.variants.map(variant => {
        return <ProductVariant key={variant.sku} variant={variant} />
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

export default ProductDetail