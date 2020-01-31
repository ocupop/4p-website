import React from 'react'

const ThisWeekItemRow = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-3">
          <div className="content">
            <div className="bg-image aspect-4x3"
              style={{
                backgroundImage: `url(https://via.placeholder.com/500x400)`
              }}
            ></div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="content">
            <h2>Item Title</h2>
            <span className="text-uppercase">Amount</span>
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
              <span className="product-price">$0.00</span>
            </div>
            <button className="btn btn-link">Remove</button>
          </div>
        </div>
      </div> 
    </>
  )
}

export default ThisWeekItemRow
