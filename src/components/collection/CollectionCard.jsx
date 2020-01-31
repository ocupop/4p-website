import React from 'react'

const CollectionCard = () => {
  return (
    <>
     <div className="card collection-card">
        <div className="bg-image aspect-2x1"
          style={{
            backgroundImage: `url(https://via.placeholder.com/768x500)`,
          }}
        ></div>
        <div className="card-body">
          <h5 className="card-title">Product title</h5>
          <div className="d-flex align-items-center justify-content-between">
            <div className="styled-select">
              <select name="" id="">
                <option value="">Option 1</option>
                <option value="">Option 2</option>
                <option value="">Option 3</option>
              </select>
            </div>
            <div className="product-price">$55.55</div>
          </div>
        </div>
        <div className="card-footer d-flex align-items-center p-0">
          <button className="product-button w-50">
            Weekly Delivery
          </button>
          <button className="product-button w-50">
            One-Time Purchase
          </button>
        </div>
      </div> 
    </>
  )
}

export default CollectionCard
