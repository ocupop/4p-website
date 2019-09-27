import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header id="pageHeader">
    <div id="topbar" className="bg-teal text-white">
      <div className="container">
        <div className="d-flex justify-content-between p-2">
          <div>Are you a wholesaler?</div>
          <div>Free delivery with purchase over $60</div>
          <div>Login</div>
        </div>
      </div>
    </div>
    <div className="container">
      <nav id="mainnav" className="navbar navbar-expand-md navbar-light">
        <a className="navbar-brand" href="/" title={ siteTitle }>
          <img src={"/img/logo-wordmark.svg"} alt={ siteTitle }/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#primarynav" aria-controls="primarynav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-md-end" id="primarynav">

          <ul className="nav navbar-nav mx-auto border-top">
            <li className="nav-item">
              <Link to="/how-it-works" className="nav-link">How it works</Link>
              </li>
            <li className="nav-item">
              <Link to="/our-impact" className="nav-link">Our Impact</Link>
              </li>
            <li className="nav-item">
              <Link to="/4p-news" className="nav-link">4P News</Link>
            </li>
          </ul>
          <ul className="navbar-nav float-md-right mt-4 mt-md-0">
            <li className="nav-item">
              <Link to="/shop" className="nav-link btn btn-primary">Shop</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
