import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import { Formik, Field, Form } from 'formik'
import draftToHtml from 'draftjs-to-html'
import parse from 'html-react-parser'

import { SelectInput } from '../../../common/fields'
// import AddToCartButton from '../cart/AddToCartButton'
import LoadingComponent from '../../../common/ui/LoadingComponent'

const ProductVariantSelect = ({ productID }) => {
  const [selectedVariant, setSelectedVariant] = useState(null)
  const [featuredImage, setFeaturedImage] = useState("https://via.placeholder.com/500x350")

  useFirestoreConnect([`products/${productID}`], [productID]) // sync /products/:id from firestore into redux
  const activeProduct = useSelector(({ firestore: { data: { products } } }) => products && products[productID])
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

  // useEffect(() => {
  //   if (selectedVariant) {
  //     setFeaturedImage(selectedVariant.data.featuredImage || activeProduct.featuredImage)
  //   }

  // }, [selectedVariant])


  // @TODO: Set first variant as selected on page load
  // useEffect(() => {
  //   if (activeProduct) {
  //     setSelectedVariant(variantOptions[0])
  //   }
  // }, [])

  if(!activeProduct) return <LoadingComponent/>

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            {activeProduct && (
              <div className="content">
                <h1 className="h2">{activeProduct.name}</h1>
                <div>
                  {parse(draftToHtml(activeProduct.description))}
                </div>
                <Formik
                  enableReinitialize
                  initialValues={{
                    selectedVariant,
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
                              setFieldValue("size", value)
                              setSelectedVariant(value)
                            }}
                            label="Choose size"
                          />
                        </Form>
                      </div>
                    )}
                    {selectedVariant && (
                      <>
                        <div className="product-price mb-2">
                          {selectedVariant.data.price}
                        </div>
                        <div className="product-amount">
                          {selectedVariant.data.size}
                        </div>
                        <div className="d-flex align-items-center mt-3">
                          {/* @TODO: Add to cart */}
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
              <div
                className="bg-image aspect-4x3"
                style={{ backgroundImage: `url(${featuredImage})` }}
              />
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
