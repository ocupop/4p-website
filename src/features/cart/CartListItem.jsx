import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { useFirestore } from 'react-redux-firebase'
import { addToCart, removeFromCart } from './cartActions'

const CartListItem = ({ item }) => {
  const firestore = useFirestore()
  const dispatch = useDispatch()
  const auth = useSelector(state => state.firebase.auth)
  const profile = useSelector(state => state.firebase.profile)

  const removeItemHandler = () => {
    dispatch(removeFromCart({ firestore }, auth.uid, profile, item.productID, item))
  }

  const addItemHandler = () => {
    const product = {
      id: item.productID,
      name: item.productName
    }

    dispatch(addToCart({ firestore }, auth.uid, profile, product, false, item))
  }

  console.log('cart list item', item)

  return (
    <div className="row">
      {JSON.stringify(item, null, 2)}
      <button className="btn btn-link" onClick={addItemHandler}>
        Add
      </button>
      <hr />
      <button className="btn btn-link" onClick={removeItemHandler}>
        Remove
      </button>
      quantity: {item.cartQuantity}
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
