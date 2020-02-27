import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'formik'
// import { removeFromCart, updateItemQuantity makeRecurring } from './cartActions'
import { QuantityInput } from '../../common/fields'
import { formatMoney } from '../../common/utils/helpers'

const CartItems = ({ move, swap, push, insert, unshift, pop, remove, form }) => {
  const {
    values: { items },
    setFieldValue
  } = form

  return (
    <ul className="list-group">
      {items &&
        items.map((item, index) => (
          <li key={`${item.productID}_${item.variantID}_${index}`} className="list-group-item">
            <div className="row">
              <div className="col-3 col-md-1">
                <div
                  className="bg-image aspect-1x1"
                  style={{
                    backgroundImage: `url(${item.featuredImage})`
                  }}
                />
              </div>
              <div className="col-9 col-md-6">
                <h4>{item.productName}</h4>
                <p>
                  {item.size} {item.label}
                </p>
              </div>
              <div className="col-2 col-md-2">
                <p>
                  <strong>{formatMoney(item.price)}</strong>
                </p>
              </div>
              <div className="col-12 col-md-3">
                <div className="d-flex align-items-center">
                  <Field
                    className="mb-0"
                    name={`items[${index}].quantity`}
                    component={QuantityInput}
                    onChange={({ target: { value } }) => setFieldValue(`items[${index}].quantity`, parseInt(value))}
                    placeholder="0"
                  />
                  <div className="actions show-on-hover ml-5">
                    <button onClick={() => remove(index)} className="btn btn-danger">
                      <i className="ri-delete-bin-line" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="row">
              <div className="col-12">
                <div className="bg-light p-5">{JSON.stringify(item, null, 2)}</div>
              </div>
            </div> */}
          </li>
        ))}
    </ul>
  )
}

CartItems.propTypes = {
  item: PropTypes.instanceOf(Object)
}

export default CartItems
