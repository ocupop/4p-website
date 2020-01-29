import React from 'react'
import mockProducts from '../mockData/products.json'
import Header from '../components/ui/header'
import Footer from '../components/ui/footer'
import Tag from '../components/ui/tag'
import ProductVariant from '../components/products/ProductVariant'

const Products = () => {
  const mockMustardProduct = mockProducts.data.allProducts.edges[0].node
  return (
    <div>
      <Header siteTitle="Shop Home" />
      <h1>Showing Product List</h1>
      {mockProducts.data.allProducts.edges.map(products => {
        return products.node.variants.map(variant => {
          return <ProductVariant key={variant.sku} variant={variant} />
        })
      })}

      <Footer siteTitle="Shop Home" />
    </div>
  )
}

export default Products
