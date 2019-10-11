import React from 'react'

const placeholderImage = {
  backgroundImage: `url("https://via.placeholder.com/500x350")`,
}
const FeaturedStore = () => {
  return (
    <>
      <div className="row">
          <div className="col">
            <div className="responsive-card-deck cards-lg-3 cards-md-2">
              <div className="card product-card">
                <div className="bg-image aspect-4x3" style={placeholderImage}></div>
                <div className="card-body">
                  <h5 className="card-title">Product title</h5>
                  <h6>Producer Name</h6>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="product-amount">Amount / Oz</div>
                    <div className="product-price">$55.55</div>
                  </div>
                </div>
                <div className="card-footer d-flex align-items-center p-0">
                  <button className="product-button w-50">
                    Weekly<br />
                    Delivery
                </button>
                  <button className="product-button w-50">
                    One-Time<br />
                    Purchase
                </button>
                </div>
              </div>
              <div className="card product-card">
                <div className="bg-image aspect-4x3" style={placeholderImage}></div>
                <div className="card-body">
                  <h5 className="card-title">Product title</h5>
                  <h6>Producer Name</h6>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="product-amount">Amount / Oz</div>
                    <div className="product-price">$55.55</div>
                  </div>
                </div>
                <div className="card-footer d-flex align-items-center p-0">
                  <button className="product-button w-50">
                    Weekly<br />
                    Delivery
                </button>
                  <button className="product-button w-50">
                    One-Time<br />
                    Purchase
                </button>
                </div>
              </div>
              <div className="card product-card">
                <div className="bg-image aspect-4x3" style={placeholderImage}></div>
                <div className="card-body">
                  <h5 className="card-title">Product title</h5>
                  <h6>Producer Name</h6>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="product-amount">Amount / Oz</div>
                    <div className="product-price">$55.55</div>
                  </div>
                </div>
                <div className="card-footer d-flex align-items-center p-0">
                  <button className="product-button w-50">
                    Weekly<br />
                    Delivery
                </button>
                  <button className="product-button w-50">
                    One-Time<br />
                    Purchase
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default FeaturedStore
