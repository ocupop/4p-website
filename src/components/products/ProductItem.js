import React from 'react'
const ProductItem = ({ product }) => {
  return (
    <>
      <div className="card product-card">
        <div 
          className="bg-image aspect-4x3"
          style={{
            backgroundImage: `url(${product.variants[0].featuredImage})`
          }}
        ></div>
        <div className="card-body">
          <h5 className="card-title">{ product.name }</h5>
          <h6>Producer Name</h6>
          <div className="d-flex align-items-center justify-content-between">
            <div className="product-amount">{product.variants[0].size }{ product.variants[0].unit }</div>
            <div className="product-price">${ product.variants[0].price }</div>
          </div>
        </div>
        <div className="card-footer d-flex align-items-center p-0">
          <button className="product-button w-50">
            Weekly<br/>
              Delivery
          </button>
          <button className="product-button w-50">
            One-Time<br/>
              Purchase
          </button>
        </div>
      </div>  
    </>
  )
}

export default ProductItem
