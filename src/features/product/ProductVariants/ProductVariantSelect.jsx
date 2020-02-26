import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import { Formik, Field, Form } from 'formik'
import draftToHtml from 'draftjs-to-html'
import parse from 'html-react-parser'
import logo from '../../../common/assets/logo-vertical.svg'

import { SelectInput } from '../../../common/fields'
// import AddToCartButton from '../cart/AddToCartButton'
import LoadingComponent from '../../../common/ui/LoadingComponent'
import AddToCart from '../../cart/AddToCart'
import { formatMoney } from '../../../common/utils/helpers'

const ProductVariantSelect = ({ productID }) => {
  const [selectedVariant, setSelectedVariant] = useState(null)
  const [featuredImage, setFeaturedImage] = useState(null)

  useFirestoreConnect([`products/${productID}`], [productID]) // sync /products/:id from firestore into redux
  const activeProduct = useSelector(
    ({
      firestore: {
        data: { products }
      }
    }) => products && products[productID]
  )

  let variantOptions = []

  if (activeProduct) {
    const { variants } = activeProduct
    variantOptions = variants.map(variant => {
      return {
        label: `${variant.size} ${variant.label}`,
        value: variant.sku,
        product: productID,
        data: variant
      }
    })
  }

  useEffect(() => {
    if (activeProduct) {
      setSelectedVariant(variantOptions[0])
    }
  }, [activeProduct])

  useEffect(() => {
    if (selectedVariant && activeProduct) {
      setFeaturedImage(selectedVariant.featuredImage || activeProduct.featuredImage)
    }
  }, [selectedVariant])

  if (!activeProduct) return <LoadingComponent />
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            {activeProduct && (
              <div className="content">
                <h1 className="h2">{activeProduct.name}</h1>
                <div>{parse(draftToHtml(activeProduct.description))}</div>
                <Formik
                  enableReinitialize
                  initialValues={{
                    selectedVariant
                  }}>
                  {({ setFieldValue }) => (
                    <>
                      {variantOptions.length > 1 && (
                        <div className="form-group">
                          <Form>
                            <Field
                              name="size"
                              type="text"
                              component={SelectInput}
                              options={variantOptions}
                              isClearable={false}
                              onChange={value => {
                                setFieldValue('size', value)
                                setSelectedVariant(value)
                              }}
                              label="Choose size"
                            />
                          </Form>
                        </div>
                      )}

                      {selectedVariant && (
                        <>
                          <div className="product-price mb-2">{formatMoney(selectedVariant.data.price)}</div>
                          <div className="product-amount">{selectedVariant.data.size}</div>
                          <div className="d-flex align-items-center mt-3">
                            <AddToCart product={{ id: productID, ...activeProduct }} item={selectedVariant.data} />
                          </div>
                        </>
                      )}
                    </>
                  )}
                </Formik>
              </div>
            )}
          </div>
          <div className="col-lg-6">
            <div className="content">
              {featuredImage ? (
                <div className="bg-image aspect-4x3" style={{ backgroundImage: `url(${featuredImage})` }} />
              ) : (
                <>
                  <img src={logo} className="img-fluid" alt="" />
                  <p className="mt-3 text-center">
                    <small>[No image available]</small>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

ProductVariantSelect.propTypes = {
  productID: PropTypes.string
}

export default ProductVariantSelect
