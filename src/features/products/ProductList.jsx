import React from 'react'
import PropTypes from 'prop-types'
import ProductCard from './ProductCard'

const ProductList = ({ products }) => {
  return (
    <>  
      {products && products.map(product => (
        <ProductCard product={product} key={product.id} />
      ))}
    </>
  )
}

ProductList.propTypes = {
  products: PropTypes.instanceOf(Array),
}

export default ProductList
