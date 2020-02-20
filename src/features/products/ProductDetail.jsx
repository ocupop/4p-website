import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import ProductVariantSelect from './ProductVariants/ProductVariantSelect'


const ProductDetail = ({ product }) => {
  const {
    // name,
    // category,
    // department,
    ingredients,
    storageTips,
    tags,
    // variants,
    vendor
  } = product

  return (
    <>
      <ProductVariantSelect product={product}/>
      <hr />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content">
                <h2>Product Details</h2>
                <div className="d-flex flex-wrap">
                  {tags && tags.map(tag => (
                    <span key={tag.value} className="product-detail-tag mb-2">
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                {ingredients && (
                  <>
                    <h2>Ingredients:</h2>
                    <p>{ingredients}</p>
                  </>
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                {storageTips && (
                  <>
                    <h3>Storage Tips</h3>
                    <p>{storageTips}</p>
                  </>
                )}
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
                <div
                  className="bg-image aspect-4x3"
                  style={{ backgroundImage: `url(https://via.placeholder.com/500x350)` }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <h2>
                  From {vendor && vendor.name}
                </h2>

                {vendor.description && <p>{vendor.description}</p>}

                <div className="row">
                  <div className="col-lg-6">
                    <span className="text-uppercase">
                      {/* @TODO - Calculate proximity from vendor.location */}
                      30 Miles from you
                    </span>
                  </div>
                  <div className="col-lg-6">
                    <Link to={`${vendor.website}`}>{vendor.website}</Link>
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
            <div className="col-12">
              <div className="content">
                {/* @TODO: Add logic required for recommended products */}

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

ProductDetail.propTypes = {
  product: PropTypes.instanceOf(Object),
}

export default ProductDetail
