import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header id="pageHeader" className="bg-dark text-white fixed-top">
    <div className="container">
      <nav id="mainNav" className="navbar navbar-expand-md navbar-dark">
        <Link className="navbar-brand" to="/">{siteTitle}</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#primarynav" aria-controls="primarynav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-md-end" id="primaryNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/shopify">Shopify</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/firestore">Firestore</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
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
