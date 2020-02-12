/* eslint-disable react/prop-types */
import React from 'react'
import ProductDetail from '../../features/products/ProductDetail'
import { PRODUCT_DATA } from '../../common/data/PRODUCT_DATA'

const Product = () => {
  const product = PRODUCT_DATA[0];
  return (
    <ProductDetail product={product} />
  )
}

export default Product
