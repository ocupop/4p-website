import React, { useContext } from 'react'

import StoreContext from '../../StoreContext'

const LineItem = props => {
  const context = useContext(StoreContext)
  const { line_item } = props

  const variantImage = line_item.variant.image ? (
    <img
      src={line_item.variant.image.src}
      alt={`${line_item.title} product shot`}
      height="60px"
    />
  ) : null

  const selectedOptions = line_item.variant.selectedOptions ? (
    <>{line_item.variant.selectedOptions.map(option => {
      return `${option.name}: ${option.value} `
    })}</>
  ) : null

  const handleRemove = () => {
    context.removeLineItem(context.client, context.checkout.id, line_item.id)
  }

  return (
    <li className="row">
      <div className="col-4">
        {variantImage}
      </div>
      <div className="col-4">
        <p>
          {line_item.title}
          {`  `}
          {line_item.variant.title === ! '' ? line_item.variant.title : ''}
        </p>
        <p>{selectedOptions}</p>
      </div>
      <div className="col-1">
        {line_item.quantity}
        {console.log(line_item)}
      </div>
      <div className="col-1">
        <button onClick={handleRemove}>Remove</button>
      </div>
    </li>
  )
}

export default LineItem
