import React from 'react'

const placeholderImage = {
  backgroundImage: `url("https://via.placeholder.com/500x350")`
}
const CommunityPicks = () => {
  return (
    <section className="bg-tan-dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3 className="text-white">Community Picks</h3>
          </div>
          <div className="col-lg-6 text-lg-right">
            <a href="#" className="btn btn-white">
              Start Shopping
            </a>
          </div>
        </div>
        <div className="responsive-card-deck cards-lg-2">
          <div className="card">
            <div className="bg-image aspect-16x9" style={placeholderImage} />
            <div className="card-footer">
              <div className="row">
                <div className="col-6">
                  <h5>Item Name</h5>
                  <p>Detail</p>
                </div>
                <div className="col-6 text-right">
                  <a href="#" className="btn btn-white">
                    See Item
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="bg-image aspect-16x9" style={placeholderImage}></div>
            <div className="card-footer">
              <div className="row">
                <div className="col-6">
                  <h5>Item Name</h5>
                  <p>Detail</p>
                </div>
                <div className="col-6 text-right">
                  <a href="#" className="btn btn-white">
                    See Item
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CommunityPicks
