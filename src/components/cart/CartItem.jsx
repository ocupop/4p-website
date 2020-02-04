import React from 'react'

const CartItem = ({ variant }) => {
  return (
    <>
      <div className="row item-row">
        <div className="col-lg-3">
          <div className="content">
            <div
              className="bg-image aspect-4x3"
              style={{
                backgroundImage: `url(https://via.placeholder.com/500x400)`,
              }}></div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="content h-100 position-relative">
            <h2>{variant.name}</h2>
            <p>Amount</p>
            <button className="btn btn-link">Remove</button>
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
              <span className="product-price">{variant.price}</span>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="delivery"
                id="delivery-weekly"
                value="weekly"
                checked
              />
              <label for="delivery-weekly">Weekly Delivery Item</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="delivery"
                id="delivery-one-time"
                value="one-time"
              />
              <label for="delivery-one-time">One-Time Purchase</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartItem
