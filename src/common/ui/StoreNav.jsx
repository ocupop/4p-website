import React from 'react'
import { Link } from 'gatsby'

const StoreNav = () => {
  return (
    <>
      <div id="storenav-wrapper">
        <div className="container">
          <nav id="storenav" className="navbar navbar-expand-lg">
            <div className="collapse navbar-collapse " id="store-primarynav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/shop-by-product">
                    Browse Goods <span className="sr-only">(current)</span>
                  </Link>
                </li>
              </ul>
              <span className="navbar-text">
                <small className="text-gray-800">Your next delivery</small>
                <br />
                <span className="text-primary">Wednesday 12/19</span>
              </span>
              <span className="navbar-text">
                <small className="text-gray-800">Submit or edit your order before</small>
                <br />
                <span className="text-primary">Sunday 12/9 by midnight</span>
              </span>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default StoreNav
