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
          <div className="bg-beige p-4">
            <div className="row">
              <div className="col-lg-6">
                <h4>Farm Name</h4>
                <p><span class="text-uppercase">Lorem ipsum dolor sit</span>, amet consectetur adipisicing elit. Nemo, veritatis officia doloremque ullam similique quasi magnam. Ad suscipit eligendi nulla pariatur. Fugit quaerat ullam quidem sequi deserunt. Suscipit, ipsam. Saepe.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <a href="#" className="btn btn-primary">Shop this weeks items</a>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </>
  )
}

export default FeaturedFarm
