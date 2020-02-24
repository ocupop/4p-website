import React from 'react'

const placeholderImageLarge = {
  backgroundImage: `url("https://via.placeholder.com/1400x600")`
}

const FeaturedFarm = () => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="bg-image aspect-16x9" style={placeholderImageLarge}></div>
          <div className="bg-tan p-4">
            <div className="row">
              <div className="col-lg-6">
                <h4>Farm Name</h4>
                <p>
                  <span class="text-uppercase">Lorem ipsum dolor sit</span>, amet consectetur adipisicing elit. Nemo,
                  veritatis officia doloremque ullam similique quasi magnam. Ad suscipit eligendi nulla pariatur. Fugit
                  quaerat ullam quidem sequi deserunt. Suscipit, ipsam. Saepe.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <a href="#" className="btn btn-primary">
                  Shop this weeks items
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="responsive-card-deck cards-lg-2 cards-md-2">
          <div className="card bg-transparent">
            <div className="bg-image aspect-4x3" style={placeholderImageSmall}></div>
            <div className="card-body">
              <h4>Farm Name</h4>
              <p>
                Farm description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae praesentium eos
                asperiores in doloribus illum? Quod eum veniam pariatur impedit dolores quos libero corrupti delectus.
              </p>
            </div>
            <div className="card-footer bg-transparent">
              <a href="#" className="btn btn-secondary">
                Shop this weeks items
              </a>
            </div>
          </div>
          <div className="card bg-transparent">
            <div className="bg-image aspect-4x3" style={placeholderImageSmall}></div>
            <div className="card-body">
              <h4>Farm Name</h4>
              <p>
                Farm description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae praesentium eos
                asperiores in doloribus illum? Quod eum veniam pariatur impedit dolores quos libero corrupti delectus.
              </p>
            </div>
            <div className="card-footer bg-transparent">
              <a href="#" className="btn btn-secondary">
                Shop this weeks items
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeaturedFarm
