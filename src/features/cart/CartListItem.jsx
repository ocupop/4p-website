import React from 'react'
import PropTypes from 'prop-types'

function removeItem(){
  console.log('remove item')
}

const CartListItem = ({ item }) => {
  console.log('cart list item', item)
  return (
    <li className="item-row">
      <div className="row">
        <div className="col-lg-3">
          <div className="content">
            <div
              className="bg-image aspect-4x3"
              style={{
                backgroundImage: `url(${item.featuredImage})`,
              }}></div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="content h-100 position-relative">
            <h3>{item.title}</h3>
            <p>{item.size} {item.unit}</p>
            <button className="btn btn-link" onClick={removeItem}>Remove</button>
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
              <input
                className="form-check-input"
                type="radio"
                name="delivery"
                id="delivery-weekly"
                value="weekly"
              />
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
}

CartListItem.propTypes = {
  item: PropTypes.instanceOf(Object)
}

export default CartListItem