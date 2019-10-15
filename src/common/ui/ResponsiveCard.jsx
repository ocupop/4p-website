import React from 'react'
import { Card } from 'react-bootstrap'

const placeholderImage = {
  backgroundImage: `url("https://via.placeholder.com/500x350")`,
}

const ResponsiveCard = () => {
  return (
    <div className="threesome">
      <Card className="bg-transparent">
        <div className="card-content">
          <div className="card-header p-0">
            <div className="content">
              <div className="bg-image aspect-4x3" style={placeholderImage} />
            </div>
          </div>
          <div className="card-body">
            <div className="content">
              <h5>Lorem News title</h5>
              <p>June 18, 2019</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quam quod error fugiat veritatis dicta soluta dolore? Perspiciatis sed obcaecati, temporibus laboriosam ut modi aspernatur? Iusto doloremque sint voluptas tempora.</p>
            </div>
            <div className="card-footer p-0">
              <a href="/" className="btn btn-secondary btn-block">Learn More</a>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default ResponsiveCard
