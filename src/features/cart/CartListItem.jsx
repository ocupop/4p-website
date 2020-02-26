import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { useFirestore } from 'react-redux-firebase'
import { Formik, Form, Field } from 'formik'
import { addToCart, removeFromCart } from './cartActions'
import { QuantityInput } from '../../common/fields'

const CartListItem = ({ item }) => {
  const firestore = useFirestore()
  const dispatch = useDispatch()
  const auth = useSelector(state => state.firebase.auth)
  const profile = useSelector(state => state.firebase.profile)

  const initialValues = {
    quantity: item.quantity
  }

  const addItemHandler = () => {
    const product = {
      id: item.productID,
      name: item.productName,
      vendor: {
        value: item.vendorID,
        label: item.vendorName
      }
    }
    console.log('@DEBUG::02262020-113910-AddItem')
    //dispatch(addToCart({ firestore }, auth.uid, profile, product, false, item))
  }

  const removeItemHandler = () => {
    console.log('@DEBUG::02262020-113917-RemoveItem')
    //dispatch(removeFromCart({ firestore }, auth.uid, profile, item.productID, item))
  }

  function handleSubmit(values) {
    console.log('@DEBUG::02262020-114247-handleSubmit')
    console.log(values)
  }

  return (
    <div>
      {JSON.stringify(item, null, 2)}
      <br />
      <Formik enableReinitialize initialValues={initialValues} onSubmit={values => handleSubmit(values)}>
        {({ values, setFieldValue }) => (
          <Form>
            <Field
              className="mb-0"
              name="quantity"
              type="number"
              component={QuantityInput}
              onAdd={addItemHandler}
              onRemove={removeItemHandler}
              onChange={({ target: { value } }) => {
                setFieldValue('quantity', parseInt(value))
                console.log('@DEBUG::02262020-105428-OnChange', parseInt(value))
              }}
              placeholder="0"
              maskOptions={{ allowDecimal: false, requireDecimal: false }}
              label="Quantity"
            />
          </Form>
        )}
      </Formik>
    </div>
  )
  /*
  return (
    <li className="item-row">
      <div className="row">
        <div className="col-lg-3">
          <div className="content">
            <div
              className="bg-image aspect-4x3"
              style={{
                backgroundImage: `url(${item.featuredImage})`
              }}></div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="content h-100 position-relative">
            <h3>{item.title}</h3>
            <p>
              {item.size} {item.unit}
            </p>

            <br />
            <button className="btn btn-link" onClick={removeItemHandler()}>
              Remove
            </button>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="content">
            <div className="d-flex mb-3">
              <div className="styled-select mr-3">
                <select name="" id="">
                  <option value="">1</option>
                  <option value="">2</option>
                </select>
              </div>
              <span className="product-price">${item.price}</span>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="delivery" id="delivery-weekly" value="weekly" />
              <label htmlFor="delivery-weekly">Weekly Delivery Item</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="delivery"
                id="delivery-one-time"
                value="one-time"
              />
              <label htmlFor="delivery-one-time">One-Time Purchase</label>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
  */
}

CartListItem.propTypes = {
  item: PropTypes.instanceOf(Object)
}

export default CartListItem
