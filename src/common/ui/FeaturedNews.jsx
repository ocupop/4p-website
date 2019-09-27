import React from 'react'
const placeholderImage = {
  backgroundImage: `url("https://via.placeholder.com/500x350")`,
}
const FeaturedNews = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-6">
          <h3>Featured 4P News</h3>
        </div>
        <div className="col-lg-6 text-lg-right">
          <a href="#" className="btn btn-primary">Explore 4P News</a>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <img src={"https://via.placeholder.com/1400x600"} className="img-fluid" alt=""/>
          <div className="p-3">
            <h4>Partnership with the Path Foundation</h4>
            <p>August 23, 2019</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus vero ad soluta eaque aperiam unde quidem quibusdam, odio eum et, blanditiis ab animi accusantium? Adipisci, rerum saepe accusamus aperiam laboriosam reprehenderit vitae eaque atque expedita quam magni velit distinctio accusantium minus esse quas iusto explicabo voluptate magnam totam earum! Itaque?</p>
          </div>
        </div>
      </div>
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

export default FeaturedNews
