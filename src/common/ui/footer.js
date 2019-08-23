import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
  <footer id="pageFooter" className="bg-dark text-white p-5 mt-5">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <Link className="navbar-brand" to="/">{siteTitle}</Link>
        </div>
        <div className="col-12 col-md-6">
          © {new Date().getFullYear()}, Built with
                  {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
