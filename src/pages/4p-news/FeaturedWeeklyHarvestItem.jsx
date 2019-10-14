import React from 'react'
import { Card } from 'react-bootstrap'

const placeholderImage = {
  backgroundImage: `url("https://via.placeholder.com/500x350")`,
}
const FeaturedWeeklyHarvestItem = () => {
  return (
    <>
      <Card className="bg-transparent">
        <div className="card-content pin-footer">
          <div className="card-header">
            <div className="content">
              <div className="bg-image aspect-4x3" style={placeholderImage} />
            </div>
          </div>
          <div className="card-body">
            <div className="content text-left">
              <h5>Weekly Harvest #000</h5>
              <p>September 19-20</p>
            </div>
          </div>
          <div className="card-footer">
            <a href="/" className="btn btn-secondary">See Newsletter</a>
          </div>
        </div>
      </Card>
    </>
  )
}

export default FeaturedWeeklyHarvestItem
