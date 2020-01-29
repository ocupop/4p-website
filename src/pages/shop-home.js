import React from 'react'
import mockProducts from '../mockData/products.json'
import Header from '../components/ui/header'
import Footer from '../components/ui/footer'
import ProductItem from '../components/products/ProductItem'
import ProductVariant from '../components/products/ProductVariant'

const ShopHome = () => {
  const mockMustardProduct = mockProducts.data.allProducts.edges[0].node
  return (
    <div>
      <Header siteTitle="Shop Home" />
      <h1>ShopHome</h1>
      <h2>Suggested Goods</h2>
      <ProductVariant variant={mockMustardProduct.variants[0] } />
      <h2>Collections</h2>
      <ProductItem product={mockMustardProduct } />
      
      <Footer siteTitle="Shop Home" />
    </div>
  )
}

export default ShopHome
