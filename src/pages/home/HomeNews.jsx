import React from 'react'
const placeholderImage = {
  backgroundImage: `url("https://via.placeholder.com/500x350")`,
}
const HomeNews = () => {
  return (
    <>
      <div className="responsive-card-deck cards-lg-3 cards-md-2">
        <div className="card bg-transparent">
          <div className="bg-image aspect-4x3" style={placeholderImage}></div>
          <div className="card-body">
            <h5>Lorem News title</h5>
            <p>June 18, 2019</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quam quod error fugiat veritatis dicta soluta dolore? Perspiciatis sed obcaecati, temporibus laboriosam ut modi aspernatur? Iusto doloremque sint voluptas tempora.</p>
          </div>
          <div className="card-footer bg-transparent">
            <a href="#" className="btn btn-secondary">See Newsletter</a>
          </div>
        </div>
        <div className="card bg-transparent">
          <div className="bg-image aspect-4x3" style={placeholderImage}></div>
          <div className="card-body">
            <h5>Lorem News title</h5>
            <p>June 18, 2019</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quam quod error fugiat veritatis dicta soluta dolore? Perspiciatis sed obcaecati, temporibus laboriosam ut modi aspernatur? Iusto doloremque sint voluptas tempora.</p>
          </div>
          <div className="card-footer bg-transparent">
            <a href="#" className="btn btn-secondary">See Newsletter</a>
          </div>
        </div>
        <div className="card bg-transparent">
          <div className="bg-image aspect-4x3" style={placeholderImage}></div>
          <div className="card-body">
            <h5>Lorem News title</h5>
            <p>June 18, 2019</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quam quod error fugiat veritatis dicta soluta dolore? Perspiciatis sed obcaecati, temporibus laboriosam ut modi aspernatur? Iusto doloremque sint voluptas tempora.</p>
          </div>
          <div className="card-footer bg-transparent">
            <a href="#" className="btn btn-secondary">See Newsletter</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeNews
