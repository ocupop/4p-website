import React from 'react'
import moduleName from 'react-bootstrap'

function FeaturedNews() {
  return (
    <>
      <section className="pt-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav>
                <ul className="nav justify-content-center">
                  <li className="nav-item">
                    <a href="#" className="nav-link">4P News</a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">Weekly Harvest Newsletters</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <FeaturedNewsItem />
          <div className="row">
            <div className="col-12">
              <NewsCards />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Weekly Harvest Newsletters (needs to be incorporated into nav)</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <NewsLetterCards />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FeaturedNews