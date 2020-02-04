import React from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'react-bootstrap'
import ProductCard from './ProductCard'

const ProductDetail = ({product}) => {

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content">
                <h1 className="h2">{product.name}</h1>
                <p className="mb-5">product description Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga fugiat quae laboriosam culpa nesciunt, quis distinctio iusto numquam velit temporibus, eum, quisquam hic. Ratione, sequi!</p>
                {/* TODO create variant select component */}
                <div className="form-group">
                  <select className="form-control" name="variant-select" id="variant-select">
                    {product.variants.map(variant => (
                      <>
                        <option key={variant.sku} value={variant.sku}>{variant.name}</option>
                      </>
                    )
                    )}
                  </select>
                </div>

                <div className="product-price mb-2">${product.variants[0].price}</div>
                <div className="product-amount">{product.variants[0].size}{product.variants[0].unit}</div>
                <div className="d-flex align-items-center mt-3">
                  <button type="button" className="product-button w-50">
                    Weekly<br />
                    Delivery
                </button>
                  <button type="button" className="product-button w-50">
                    One-Time<br />
                    Purchase
                </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <Carousel>
                  <Carousel.Item>
                    <div className="bg-image aspect-4x3"
                      style={{
                        backgroundImage: `url(https://via.placeholder.com/800x500/000)`
                      }}
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content">
                <h2>Product Details</h2>
                <div className="d-flex">
                  {product.variants[0].tags && product.variants[0].tags.map((tag, index) => (
                    <>
                      <span key={index} className="product-detail-tag">{tag}</span>
                    </>
                  )
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <h2>Ingredients:</h2>
                <span>Need to output ingredients</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content">
                <div className="bg-image aspect-4x3"
                  style={{
                    backgroundImage: `url(https://via.placeholder.com/800)`
                  }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <h2>From Whiffletree Farms</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quia nihil omnis temporibus voluptatibus nostrum similique ad quae rem, suscipit dolores ex! Libero veniam, sit molestias maxime ratione perspiciatis officiis, illo tempore tenetur velit ducimus!</p>
                <div className="row">
                  <div className="col-lg-6">
                    <span className="text-uppercase text-light">30 Miles from you</span>
                  </div>
                  <div className="col-lg-6">
                    <a href="#">whiffletreefarms.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h2 className="h1">We Recommend</h2>
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-md-6 col-lg-3">
              <div className="content">
                <ProductCard product={product} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}

ProductDetail.propTypes = {
  product: PropTypes.instanceOf(Object)
}

export default ProductDetail
