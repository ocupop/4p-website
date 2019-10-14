import React from 'react'
import { Card } from 'react-bootstrap'

const placeholderImage = {
  backgroundImage: `url("https://via.placeholder.com/500x350")`,
}
const HomeNews = () => {
  return (
    <>
    <div className="threesome mt-5">
      <Card>
        <div className="card-content">
          <div className="card-header">
            <div className="content bg-image aspect-4x3" style={placeholderImage}/>
          </div>
          <div className="card-body">
            <div className="content">
              <h5>Lorem News title</h5>
              <p>June 18, 2019</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quam quod error fugiat veritatis dicta soluta dolore? Perspiciatis sed obcaecati, temporibus laboriosam ut modi aspernatur? Iusto doloremque sint voluptas tempora.</p>
            </div>
            <div className="card-footer">
              <a href="/" className="btn btn-green btn-block">Learn More</a>
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <div className="card-content">
          <div className="card-header">
            <div className="content bg-image aspect-4x3" style={placeholderImage} />
          </div>
          <div className="card-body">
            <div className="content">
              <h5>Lorem News title</h5>
              <p>June 18, 2019</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quam quod error fugiat veritatis dicta soluta dolore? Perspiciatis sed obcaecati, temporibus laboriosam ut modi aspernatur? Iusto doloremque sint voluptas tempora.</p>
            </div>
            <div className="card-footer">
              <a href="/" className="btn btn-green btn-block">Learn More</a>
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <div className="card-content">
          <div className="card-header">
            <div className="content bg-image aspect-4x3" style={placeholderImage} />
          </div>
          <div className="card-body">
            <div className="content">
              <h5>Lorem News title</h5>
              <p>June 18, 2019</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quam quod error fugiat veritatis dicta soluta dolore? Perspiciatis sed obcaecati, temporibus laboriosam ut modi aspernatur? Iusto doloremque sint voluptas tempora.</p>
            </div>
            <div className="card-footer">
              <a href="/" className="btn btn-green btn-block">Learn More</a>
            </div>
          </div>
        </div>
      </Card>

    </div>
    </>
  )
}

export default HomeNews
