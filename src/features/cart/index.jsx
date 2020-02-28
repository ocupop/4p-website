import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { useFirebase, isLoaded, isEmpty } from 'react-redux-firebase'
import { Formik, Form, FieldArray } from 'formik'
// import FormikDebug from '../../common/utils/FormikDebug'
import LoadingComponent from '../../common/ui/LoadingComponent'
import CartItems from './CartItems'
import CartTotals from './CartTotals'

import { updateCart, itemInCart } from './cartActions'
import { openModal } from '../modal/modalActions'
import { formatDate } from '../../common/utils/helpers'

const Cart = () => {
  const dispatch = useDispatch()
  const [activeCart, setActiveCart] = useState({})
  const firebase = useFirebase()
  const profile = useSelector(state => state.firebase.profile)
  const { shoppingCart } = profile
  let initialValues = activeCart

  useEffect(() => {
    // Check to see if the shoping cart exists as profile loads.
    if (shoppingCart) {
      setActiveCart(shoppingCart)
    }
  }, [profile])

  function handleSubmit(values) {
    dispatch(updateCart({ firebase, newCart: values }))
  }
  return (
    <>
      {!isLoaded(profile) ? (
        <LoadingComponent inverted />
      ) : (
        <>
          <div className="row">
            <div className="col-12">
              <div className="d-md-flex align-items-center justify-content-between">
                {!isEmpty(profile) && (
                  <>
                    <h1 className="d-md-inline-block">Your cart</h1>
                    <div className="delivery-details d-md-flex align-items-center">
                      <span className="text-uppercase">
                        Your next delivery
                        <strong className="ml-md-2">{`(DATE)`}</strong>
                      </span>
                      <a href="#">
                        <small>
                          Edit Delivery
                          <br />
                          Schedule
                        </small>
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <hr />
          {activeCart && activeCart.items ? (
            <div className="row">
              <div className="col-12">
                <Formik initialValues={initialValues} onSubmit={() => console.log(values)}>
                  {({ values, setFieldValue, resetForm }) => (
                    <Form>
                      <FieldArray name="items" component={CartItems} />

                      {values !== activeCart ? (
                        <button
                          type="button"
                          onClick={() => handleSubmit(values)}
                          className="btn btn-lg btn-block btn-outline-primary">
                          Save Changes
                        </button>
                      ) : (
                        <>
                          <small>minimum met message</small>
                        </>
                      )}
                      <hr />
                      <CartTotals shoppingCart={shoppingCart} />

                      {/* <FormikDebug /> */}
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          ) : (
            <div className="row justify-content-center">
              <div className="col-12 col-md-6">
                {isEmpty(profile) ? (
                  <div className="alert alert-warning text-center">
                    <p>
                      <strong>You don't have anything in your cart!</strong>
                      <br />
                      Are you afraid that we might not guess where you live? Try signing up now and confirm that we have
                      your address!
                    </p>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => dispatch(openModal('RegisterModal'))}>
                      Sign-Up Now
                    </button>
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
        </>
      )}
    </>
  )
}

Cart.propTypes = {}

export default Cart
