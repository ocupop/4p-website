import React from 'react'

const placeholderImage = {
  backgroundImage: `url("https://via.placeholder.com/500x350")`,
}

const TeamList = () => {
  return (
    <>
      <div className="responsive-card-deck cards-lg-3 cards-md-2">
        <div className="card bg-transparent">
          <div className="bg-image aspect-4x3" style={placeholderImage}></div>
          <div className="card-body">
            <h5>Firstname Lastname</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos adipisci eligendi doloremque quia debitis, incidunt sunt amet eum itaque deserunt.</p>
            <p>Favorite Veggie:<br/>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card-footer bg-transparent">
            <a href="#" className="btn btn-secondary">Read More</a>
          </div>
        </div>
        <div className="card bg-transparent">
          <div className="bg-image aspect-4x3" style={placeholderImage}></div>
          <div className="card-body">
            <h5>Firstname Lastname</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos adipisci eligendi doloremque quia debitis, incidunt sunt amet eum itaque deserunt.</p>
            <p>Favorite Veggie:<br />Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card-footer bg-transparent">
            <a href="#" className="btn btn-secondary">Read More</a>
          </div>
        </div>
        <div className="card bg-transparent">
          <div className="bg-image aspect-4x3" style={placeholderImage}></div>
          <div className="card-body">
            <h5>Firstname Lastname</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos adipisci eligendi doloremque quia debitis, incidunt sunt amet eum itaque deserunt.</p>
            <p>Favorite Veggie:<br />Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card-footer bg-transparent">
            <a href="#" className="btn btn-secondary">Read More</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamList
