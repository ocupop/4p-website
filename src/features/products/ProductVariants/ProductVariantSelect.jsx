import React from 'react'
// import PropTypes from 'prop-types'
// import { useParams } from "react-router"
// import _ from 'lodash'
// import { useSelector } from 'react-redux'
// import { useFirestoreConnect } from 'react-redux-firebase'
import { Formik, Field, Form } from 'formik'

// import { Carousel } from 'react-bootstrap'
// import { SelectInput } from '../../common/fields'
// import AddToCartButton from '../cart/AddToCartButton'
// import LoadingComponent from '../../common/ui/LoadingComponent'

const ProductVariantSelect = () => {
  const {id} = useParams()
  console.log("ID:", id)
  // const [variantOptions, setVariantOptions] = useState([])
  // const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  // const variantOptions = product.variants.map(variant => {
  //   return {
  //     label: `${variant.name} - ${variant.label}`,
  //     value: variant.id,
  //     data: variant
  //   }
  // })

  // useEffect(() => {
  //   if (product.variants.length > 1) {
  //     const variants = product.variants.map(variant => {
  //       return {
  //         label: variant.name,
  //         value: variant.id,
  //       }
  //     })
  //     setSelectedVariant(product.variants[0])
  //     setSelectProductVariants(variants)
  //   }
  // }, [])

  // const getFeaturedImage = () => {
  //   if (selectedVariant.featuredImage) {
  //     return selectedVariant.featuredImage
  //   }
  //   if (product.featuredImage) {
  //     return product.featuredImage
  //   }
  //   return ''
  // }

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="content">
              {/* <h1 className="h2">{product.name}</h1>
              <p className="mb-5">{product.description}</p> */}
              <Formik
                enableReinitialize
                initialValues={{
                  // selectedVariant: variantOptions[0],
                }}>
                {({ values, setFieldValue }) => (
                  <>
                    {/* {variantOptions.length > 1 && (
                      <div className="form-group">
                        <Form>
                          <p>{values.selectedVariant.label}</p>
                          <Field
                            name="selectedVariant"
                            type="text"
                            component={SelectInput}
                            options={variantOptions}
                            isClearable={false}
                            onChange={value => setFieldValue("selectedVariant", value)}
                            // onChange={value => {
                            //   const variant = _.find(product.variants, {
                            //     id: value.value,
                            //   })
                            //   setSelectedVariant(variant)
                            // }}
                            label="Select Featured Product"
                          />
                        </Form>
                      </div>
                    )} */}
                    <div className="product-price mb-2">
                      {/* ${values.selectedVariant.price} */}
                    </div>
                    <div className="product-amount">
                      {/* {values.selectedVariant.size} {values.selectedVariant.unit} */}
                    </div>
                    <div className="d-flex align-items-center mt-3">
                      {/* <AddToCartButton
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
                      </AddToCartButton> */}
                    </div>
                  </>
                )}
              </Formik>

            </div>
          </div>
          <div className="col-lg-6">
            <div className="content">
              {/* <Carousel>
                <Carousel.Item>
                  <div
                    className="bg-image aspect-4x3"
                    style={{
                      backgroundImage: `url(${getFeaturedImage()})`,
                    }}
                  />
                </Carousel.Item>
              </Carousel> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

ProductVariantSelect.propTypes = {

}

export default ProductVariantSelect
