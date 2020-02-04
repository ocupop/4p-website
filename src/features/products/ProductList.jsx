import React from 'react'
import PropTypes from 'prop-types'
import ProductCard from './ProductCard'

const ProductList = ({ products }) => {
  return (
    <>
      <section>
        {/* <SearchFilterBar /> */}
        <div className="container">
          <div className="row no-gutters">
            {products.map(product => (
              <div className="col-md-6 col-lg-3" key={product.node.id}>
                <div className="content">
                  <ProductCard product={product.node} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

ProductList.propTypes = {
  products: PropTypes.instanceOf(Array),
}

export default ProductList
