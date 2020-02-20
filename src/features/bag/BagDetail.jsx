import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { Carousel } from 'react-bootstrap'
import { Formik, Field, Form } from 'formik'
import { SelectInput } from '../../common/fields'
import { SINGLE_BAG, RECURRING_BAG } from '../../common/constants/BagTypes'
import AddToCartButton from '../cart/AddToCartButton'
import BagCard from './BagCard'

const BagDetails = ({bag}) => {
  const [selectBagVariants, setSelectBagVariants] = useState([])
  const [selectedVariant, setSelectedVariant] = useState(bag.variants[0])

  useEffect(() => {
    // Only create label name pair if there are more than one variant
    if (bag.variants.length > 1) {
      const variants = bag.variants.map(variant => {
        return {
          label: variant.name,
          value: variant.id,
        }
      })
      setSelectedVariant(bag.variants[0])
      setSelectBagVariants(variants)
    }
  }, [])

  const getFeaturedImage = () => {
    if (selectedVariant.featuredImage) {
      return selectedVariant.featuredImage
    }
    if (bag.featuredImage) {
      return bag.featuredImage
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
                <h1 className="h2">{bag.name}</h1>
                <p className="mb-5">{bag.description}</p>
                {/* Only display the select, if there are select options */}
                {selectBagVariants.length >= 2 && (
                  <div className="form-group">
                    <Formik
                      enableReinitialize
                      initialValues={{
                        featuredProduct: selectBagVariants[0],
                      }}>
                      {() => (
                        <Form>
                          <Field
                            name="featuredBag"
                            type="text"
                            component={SelectInput}
                            options={selectBagVariants}
                            onChange={value => {
                              const variant = _.find(bag.variants, {
                                id: value.value,
                              })
                              setSelectedVariant(variant)
                            }}
                            label="Select Featured Bag"
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
            <div className="col-lg-4">
              <div className="content">
                <h2>Good Food</h2>
                <p className="font-family-serif">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, excepturi!</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="content">
                <h2>Mix and Match</h2>
                <p className="font-family-serif">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, excepturi!</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="content">
                <h2>Skip Anytime</h2>
                <p className="font-family-serif">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, excepturi!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h2>Previous Deliveries</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {/* TODO loop through previous deliveries */}

            <div className="col-lg-3">
              <div className="content">
                <a href="#" className="bg-image aspect-4x3"
                  style={{
                    backgroundImage: `url(https://via.placeholder.com/768x500)`,
                  }}>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* TODO is 'this weeks goods' section from the design still relevant in this view */}
      {/* <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h2>This week's goods</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <div className="content">
                    <div className="bg-image aspect-4x3"
                      style={{
                        backgroundImage: `url(https://via.placeholder.com/768x500)`,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="content">
                    <h3 className="h2">Product Name</h3>
                    <span className="text-uppercase">product size / amount</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* TODO need to include logic for 'we recommend' products section */}
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
                <BagCard bag={bag} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

BagDetails.propTypes = {
  bag: PropTypes.instanceOf(Object)
}

export default BagDetails
