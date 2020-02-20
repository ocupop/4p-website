import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { Formik, Field, Form } from 'formik'
import { SelectInput } from '../../common/fields'
import { SINGLE_BAG, RECURRING_BAG } from '../../common/constants/BagTypes'
import AddToCartButton from '../cart/AddToCartButton'

const BagCard = ({bag}) => {
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
      <div className="card collection-card">
        {/* TODO add link to bag once bag pages are being built out */}
        <div className="bg-image aspect-2x1"
          style={{
            backgroundImage: `url(${getFeaturedImage()})`,
          }}
        ></div>
        <div className="card-body">
          <h5 className="card-title">{bag.name}</h5>
          <div className="d-flex align-items-center justify-content-between">
            {/* Only display the select, if there are select options */}
            {selectBagVariants.length >= 2 && (
              
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
                      label="Select Bag Size"
                    />
                  </Form>
                )}
              </Formik>
        
            )}
            <div className="product-price">${selectedVariant.price}</div>
          </div>
        </div>
        <div className="card-footer d-flex align-items-center p-0">
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
    </>
  )
}

BagCard.propTypes = {
  bag: PropTypes.instanceOf(Object)
}

export default BagCard
