import React from 'react'
import mockProducts from '../mockData/products.json'
import Header from '../components/ui/header'
import Footer from '../components/ui/footer'
import Tag from '../components/ui/tag'
import ProductVariant from '../components/products/ProductVariant'

const ProductDetail = () => {
  const mockMustardProduct = mockProducts.data.allProducts.edges[0].node
  return (
    <div>
      <Header siteTitle="Shop Home" />
      <h1>Showing Product Detail</h1>
      <h2>Product Details</h2>
      <Tag name="Tag1" />
      <Tag name="Tag2" />
      <Tag name="Tag3" />
      <h2>We Recommend</h2>
      {mockMustardProduct.variants.map(variant => {
        return <ProductVariant key={variant.sku} variant={variant} />
      })}

      <Footer siteTitle="Shop Home" />
    </div>
  )
}

export default ProductDetail