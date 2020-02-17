import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import { Formik, Field, Form } from 'formik'

import { Carousel } from 'react-bootstrap'
import { SelectInput } from '../../../common/fields'
// import AddToCartButton from '../cart/AddToCartButton'
// import LoadingComponent from '../../common/ui/LoadingComponent'

const ProductVariantSelect = ({ product }) => {
  const {id} = product
  const [selectedVariant, setSelectedVariant] = useState(null)
  const [featuredImage, setFeaturedImage] = useState("")

  useFirestoreConnect([`products/${id}`], [id]) // sync /products/:id from firestore into redux
  const activeProduct = useSelector(({ firestore: { data: { products } } }) => products && products[id])
  let variantOptions = []
  if (activeProduct) {
    const { variants } = activeProduct
    variantOptions = variants.map(variant => {
      return {
        label: `${variant.size} ${variant.label}`,
        value: variant.sku,
        product: id,
        data: variant
      }
    })
  }

  // console.log(activeProduct)

  useEffect(() => {
    if (selectedVariant) {
      setFeaturedImage(selectedVariant.data.featuredImage || product.featuredImage)
    }

  }, [selectedVariant])


  // @TODO: Set first variant as selected on page load
  // useEffect(() => {
  //   if (activeProduct) {
  //     setSelectedVariant(variantOptions[0])
  //   }
  // }, [])



  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            {product && (
              <div className="content">
                <h1 className="h2">{product.name}</h1>
                <p className="mb-5">{product.description}</p>
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
              {/* @TODO: Update carousel logic to account for an array of images */}
              <Carousel>
                <Carousel.Item>
                  <div
                    className="bg-image aspect-4x3"
                    style={{ backgroundImage: `url(${featuredImage})`}}
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

ProductVariantSelect.propTypes = {
  product: PropTypes.instanceOf(Object)
}

export default ProductVariantSelect
