import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { Carousel } from 'react-bootstrap'
import { Formik, Field, Form } from 'formik'
import ProductCard from './ProductCard'
import { SelectInput } from '../../common/fields'
import { SINGLE_BAG, RECURRING_BAG } from '../../common/constants/BagTypes'
import AddToCartButton from '../cart/AddToCartButton'

const ProductDetail = ({ product }) => {
  console.log(product)
  const [selectProductVariants, setSelectProductVariants] = useState([])
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])

  useEffect(() => {
    // Only create label name pair if there are more than one variant
    if (product.variants.length > 1) {
      const variants = product.variants.map(variant => {
        return {
          label: variant.name,
          value: variant.id,
        }
      })
      setSelectedVariant(product.variants[0])
      setSelectProductVariants(variants)
    }
  }, [])

  const getFeaturedImage = () => {
    if (selectedVariant.featuredImage) {
      return selectedVariant.featuredImage
    }
    if (product.featuredImage) {
      return product.featuredImage
    }
    return ''
  }

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content">
                <h1 className="h2">{product.name}</h1>
                <p className="mb-5">{product.description}</p>
                {/* Only display the select, if there are select options */}
                {selectProductVariants.length >= 2 && (
                  <div className="form-group">
                    <Formik
                      enableReinitialize
                      initialValues={{
                        featuredProduct: selectProductVariants[0],
                      }}>
                      {() => (
                        <Form>
                          <Field
                            name="featuredProduct"
                            type="text"
                            component={SelectInput}
                            options={selectProductVariants}
                            onChange={value => {
                              const variant = _.find(product.variants, {
                                id: value.value,
                              })
                              setSelectedVariant(variant)
                            }}
                            label="Select Featured Product"
                          />
                        </Form>
                      )}
                    </Formik>
                  </div>
                )}

                <div className="product-price mb-2">
                  ${selectedVariant.price}
                </div>
                <div className="product-amount">
                  {selectedVariant.size}
                  {selectedVariant.unit}
                </div>
                <div className="d-flex align-items-center mt-3">
                  <AddToCartButton
                    bagType={RECURRING_BAG}
                    item={selectedVariant}>
                    Weekly
                    <br />
                    Delivery
                  </AddToCartButton>

                  <AddToCartButton bagType={SINGLE_BAG} item={selectedVariant}>
                    Single
                    <br />
                    Delivery
                  </AddToCartButton>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <Carousel>
                  <Carousel.Item>
                    <div
                      className="bg-image aspect-4x3"
                      style={{
                        backgroundImage: `url(${getFeaturedImage()})`,
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
                  {product.tags &&
                    product.tags.map((tag, index) => (
                      <span key={index} className="product-detail-tag">
                        {tag}
                      </span>
                    ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <h2>Ingredients:</h2>
                <span>{product.ingredients}</span>
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
                  style={{
                    backgroundImage: `url(https://via.placeholder.com/800)`,
                  }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <h2>
                  From {selectedVariant.vendor && selectedVariant.vendor.name}
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  quia nihil omnis temporibus voluptatibus nostrum similique ad
                  quae rem, suscipit dolores ex! Libero veniam, sit molestias
                  maxime ratione perspiciatis officiis, illo tempore tenetur
                  velit ducimus!
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <span className="text-uppercase text-light">
                      30 Miles from you
                    </span>
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
  product: PropTypes.instanceOf(Object),
}

export default ProductDetail
