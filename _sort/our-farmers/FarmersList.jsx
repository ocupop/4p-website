import React from 'react'

const placeholderImageSmall = {
  backgroundImage: `url("https://via.placeholder.com/500x350")`
}

const FarmersList = () => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="responsive-card-deck cards-lg-2 cards-md-2">
            <div className="card bg-transparent">
              <div className="bg-image aspect-4x3" style={placeholderImageSmall}></div>
              <div className="card-body">
                <h4>Farm Name</h4>
                <p>Farm description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae praesentium eos asperiores in doloribus illum? Quod eum veniam pariatur impedit dolores quos libero corrupti delectus.</p>
              </div>
              <div className="card-footer bg-transparent">
                <a href="#" className="btn btn-secondary">Shop this weeks items</a>
              </div>
            </div>
            <div className="card bg-transparent">
              <div className="bg-image aspect-4x3" style={placeholderImageSmall}></div>
              <div className="card-body">
                <h4>Farm Name</h4>
                <p>Farm description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae praesentium eos asperiores in doloribus illum? Quod eum veniam pariatur impedit dolores quos libero corrupti delectus.</p>
              </div>
              <div className="card-footer bg-transparent">
                <a href="#" className="btn btn-secondary">Shop this weeks items</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FarmersList
