import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { useFirebase, useFirestore, isLoaded, isEmpty } from 'react-redux-firebase'
import { Formik, Field, Form, FieldArray } from 'formik'
import FormikDebug from '../../common/utils/FormikDebug'

import CartItems from './CartItems'
import CartTotals from './CartTotals'

import { updateCart } from './cartActions'

const Cart = () => {
  const dispatch = useDispatch()
  const [cart, setCart] = useState(null)
  const firebase = useFirebase()
  const profile = useSelector(state => state.firebase.profile)
  const { shoppingCart } = profile
  let initialValues = cart

  useEffect(() => {
    // Check to see if the shoping cart exists as profile loads.
    if (shoppingCart) {
      setCart(shoppingCart)
    }
  }, [profile])

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-md-flex align-items-center justify-content-between">
                <h1 className="d-md-inline-block">Your cart</h1>
                <div className="delivery-details d-md-flex align-items-center">
                  <span className="text-uppercase">
                    Your next delivery
                    <strong className="ml-md-2"> Wednesday 12/19</strong>
                  </span>
                  <a href="#">
                    <small>
                      Edit Delivery
                      <br />
                      Schedule
                    </small>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          {cart && cart.items.length > 0 ? (
            <div className="row">
              <div className="col-12">
                <Formik initialValues={initialValues} onSubmit={() => console.log(values)}>
                  {({ values, setFieldValue }) => (
                    <Form>
                      <p>{cart.cartPrice}</p>
                      <FieldArray name="items" component={CartItems} />
                      {values !== initialValues ? (
                        <button
                          type="button"
                          onClick={() => dispatch(updateCart({ firebase, newCart: values }))}
                          className="btn btn-lg btn-block btn-outline-primary">
                          Save Changes
                        </button>
                      ) : (
                        <CartTotals />
                      )}

                      <FormikDebug />
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          ) : (
            <div className="row justify-content-center">
              <div className="col-12 col-md-6">
                {/* {!isLoaded(profile) ? (
                  <LoadingComponent inverted />
                ) : (
                  isEmpty(profile) ? (
                    <div>Test</div>
                  )
                } */}
                {profile ? (
                  <div className="alert alert-warning">
                    <p>
                      You don't have anything in your cart. Are you afraid that we might not guess where you live? Try
                      signing up now and confirm that we have your address.
                    </p>
                  </div>
                ) : (
                  <div className="alert alert-warning">
                    <p>
                      <strong>{profile.displayName}</strong>
                    </p>
                    <p>Uh Oh! Your cart is empty...</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

Cart.propTypes = {}

export default Cart
