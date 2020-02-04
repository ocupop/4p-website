import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
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
                  <Link to={`/products/${product.node.id}`}>
                    <ProductCard product={product.node} />
                  </Link>
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
