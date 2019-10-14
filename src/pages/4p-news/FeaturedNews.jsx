import React from 'react'
import FeaturedNewsItem from './FeaturedNewsItem'

function FeaturedNews() {
  return (
    <>
      <div className="row mb-3">
        <div className="col-lg-6">
          <h3>Featured 4P News</h3>
        </div>
        <div className="col-lg-6 text-lg-right">
          <a href="#" className="btn btn-primary">Explore 4P News</a>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-12">
          <FeaturedNewsItem />
        </div>
      </div>
      <div className="threesome mt-5">
        <FeaturedNewsItem />
        <FeaturedNewsItem />
        <FeaturedNewsItem />
      </div>
    </>
  )
}

export default FeaturedNews
