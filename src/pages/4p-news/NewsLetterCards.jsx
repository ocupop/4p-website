import React from 'react'

const placeholderImage = {
  backgroundImage: `url("https://via.placeholder.com/500x350")`,
}

const NewsLetterCards = () => {
  return (
    <>
      <div className="responsive-card-deck cards-lg-3 cards-md-2">
        <div className="card bg-transparent">
          <div className="bg-image aspect-4x3" style={placeholderImage}></div>
          <div className="card-body">
            <h5>Weekly Harvest #000</h5>
            <p>September 19-20</p>
          </div>
          <div className="card-footer bg-transparent">
            <a href="#" className="btn btn-secondary">See Newsletter</a>
          </div>
        </div>
        <div className="card bg-transparent">
          <div className="bg-image aspect-4x3" style={placeholderImage}></div>
          <div className="card-body">
            <h5>Weekly Harvest #000</h5>
            <p>September 19-20</p>
          </div>
          <div className="card-footer bg-transparent">
            <a href="#" className="btn btn-secondary">See Newsletter</a>
          </div>
        </div>
        <div className="card bg-transparent">
          <div className="bg-image aspect-4x3" style={placeholderImage}></div>
          <div className="card-body">
            <h5>Weekly Harvest #000</h5>
            <p>September 19-20</p>
          </div>
          <div className="card-footer bg-transparent">
            <a href="#" className="btn btn-secondary">See Newsletter</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsLetterCards
