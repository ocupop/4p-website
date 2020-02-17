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
            <div className="col-12">
              <div className="content">
                <div className="responsive-card-deck cards-md-3 cards-lg-4">
                  {products.map(({ node: product }) => (
                    <ProductCard product={product} key={product.id} />
                  ))}
                </div>
              </div>
            </div>
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
