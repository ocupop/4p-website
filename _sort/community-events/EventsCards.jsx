import React from 'react'

const placeholderImage = {
  backgroundImage: `url("https://via.placeholder.com/500x350")`,
}

const EventsCards = () => {
  return (
    <>
      <div className="responsive-card-deck cards-lg-3 cards-md-2">
        <div className="card bg-transparent">
          <div className="bg-image aspect-4x3" style={placeholderImage}></div>
          <div className="card-body">
            <h5>Event title</h5>
            <p className="mb-0">Saturday</p>
            <p className="mb-0">June 18, 2019</p>
            <p>4pm</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quam quod error fugiat veritatis dicta soluta dolore? Perspiciatis sed obcaecati, temporibus laboriosam ut modi aspernatur? Iusto doloremque sint voluptas tempora.</p>
          </div>
          <div className="card-footer bg-transparent">
            <a href="#" className="btn btn-secondary">Read More</a>
          </div>
        </div>
        <div className="card bg-transparent">
          <div className="bg-image aspect-4x3" style={placeholderImage}></div>
          <div className="card-body">
            <h5>Event title</h5>
            <p className="mb-0">Saturday</p>
            <p className="mb-0">June 18, 2019</p>
            <p>4pm</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quam quod error fugiat veritatis dicta soluta dolore? Perspiciatis sed obcaecati, temporibus laboriosam ut modi aspernatur? Iusto doloremque sint voluptas tempora.</p>
          </div>
          <div className="card-footer bg-transparent">
            <a href="#" className="btn btn-secondary">Read More</a>
          </div>
        </div>
        <div className="card bg-transparent">
          <div className="bg-image aspect-4x3" style={placeholderImage}></div>
          <div className="card-body">
            <h5>Event title</h5>
            <p className="mb-0">Saturday</p>
            <p className="mb-0">June 18, 2019</p>
            <p>4pm</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quam quod error fugiat veritatis dicta soluta dolore? Perspiciatis sed obcaecati, temporibus laboriosam ut modi aspernatur? Iusto doloremque sint voluptas tempora.</p>
          </div>
          <div className="card-footer bg-transparent">
            <a href="#" className="btn btn-secondary">Read More</a>
          </div>
        </div>
      </div>    
    </>
  )
}

export default EventsCards
