import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
  <footer id="pageFooter">
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h6>Shop</h6>
            <ul className="nav flex-column">
              <li className="nav-item">
                Shop Collections
            </li>
              <li className="nav-item">
                Browse Goods
            </li>
              <li className="nav-item">
                How it Works
            </li>
              <li className="nav-item">
                Delivery Options
            </li>
              <li className="nav-item">
                Wholesale Program
            </li>
              <li className="nav-item">
                Refer a Friend
            </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h6>About 4P</h6>
            <ul className="nav flex-column">
              <li className="nav-item">
                About Us
            </li>
              <li className="nav-item">
                Our Impact
            </li>
              <li className="nav-item">
                Our Farmers
            </li>
              <li className="nav-item">
                Our Partners
            </li>
              <li className="nav-item">
                Our Team
            </li>
              <li className="nav-item">
                Food Access Program
            </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h6>Enrich Yourself</h6>
            <ul className="nav flex-column">
              <li className="nav-item">
                4P News
            </li>
              <li className="nav-item">
                Recipes &amp; Tips
            </li>
              <li className="nav-item">
                Newsletter Archive
            </li>
              <li className="nav-item">
                Community Events
            </li>
              <li className="nav-item">
                Careers
            </li>
              <li className="nav-item">
                Volunteer
            </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h6>Support</h6>
            <ul className="nav flex-column">
              <li className="nav-item">
                Contact Us
            </li>
              <li className="nav-item">
                FAQ
            </li>
              <li className="nav-item">
                Legal
            </li>
              <li className="nav-item">
                Chat
            </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-3">
            <Link className="navbar-brand" to="/">
              <img src={"/img/4p-foods-cmyk-logo-color-color.png"} className="img-fluid" alt="4P Foods logo" />
            </Link>
          </div>
          <div className="col-lg-6">
            <h6>Sign up for our Newsletter</h6>
            <input type="text" />
            <a href="#" className="btn btn-secondary">Submit</a>
          </div>
          <div className="col-lg-3">
            <h6>Connect with us</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            © {new Date().getFullYear()} 4P Foods
          </div>
        </div>
      </div>
    </section>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
