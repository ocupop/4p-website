import React from 'react'
import { Card } from 'react-bootstrap'
import FeaturedWeeklyHarvestItem from './FeaturedWeeklyHarvestItem'

const placeholderImage = {
  backgroundImage: `url("https://via.placeholder.com/500x350")`,
}
const FeaturedWeeklyHarvest = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-6">
          <h3>Featured Weekly Harvest</h3>
        </div>
        <div className="col-lg-6 text-lg-right">
          <a href="#" className="btn btn-primary">Explore Newsletters</a>
        </div>
      </div>

      <div className="threesome mt-4">
        <FeaturedWeeklyHarvestItem/>
        <FeaturedWeeklyHarvestItem />
        <Card className="bg-transparent">
          <div className="card-content">
            <div className="card-header">
              <div className="content">
                <div className="bg-image aspect-4x3" style={placeholderImage} />
              </div>
            </div>
            <div className="card-body">
              <div className="content text-left">
                <h5>Weekly Harvest #000</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tempore quisquam quis perspiciatis neque dolores harum, nihil eius architecto provident odit. Veniam autem voluptatum reprehenderit esse id laboriosam necessitatibus blanditiis?</p>
                <p>September 19-20</p>
              </div>
            </div>
            <div className="card-footer">
              <a href="/" className="btn btn-secondary">See Newsletter</a>
            </div>
          </div>
        </Card>
      </div>

      {/* <div className="responsive-card-deck cards-lg-3 cards-md-2">
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum vitae ipsam placeat, velit consequatur ex accusantium adipisci repellat veritatis fugiat consectetur exercitationem. Magni vitae libero quae repellendus cupiditate provident officiis.</p>
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
      </div> */}

    </>
  )
}

export default FeaturedWeeklyHarvest
