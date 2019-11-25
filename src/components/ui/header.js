import React, { useContext, useState, useEffect } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Navbar, Nav } from 'react-bootstrap'
import logo from '../../../content/img/logo-wordmark.svg'

const Header = ({ siteTitle }) => {
  // const shop = useContext(StoreContext)
  // const { checkout } = shop
  // const [quantity, setQuantity] = useState(countQuantity(checkout ? checkout.lineItems : []))
  const [showMobileNav, setMobileNavVisibility] = useState(false)
  // const [companyNavVisibility, setCompanyNavVisibility] = useState(false)
  // const [communityNavVisibility, setCommunityNavVisibility] = useState(false)

  return (
    <header id="pageHeader">
      <div className="bg-teal text-white">
        <div id="topnav" className="d-flex justify-content-between px-5 py-2">
          <div className=""><a href="/wholesale">Are you a wholesaler?</a></div>
          <div className="text-center d-none d-md-block">Free delivery with purchase over $60</div>
          <div className="text-right d-none d-md-block"><a href="/login">Login</a></div>
        </div>
      </div>
      <Navbar id="mainnav" expand="lg">
        <Navbar.Brand href="/">
          <img src={logo} alt={siteTitle} />
        </Navbar.Brand>
        <Nav id="primarynav" className="mx-auto">
          <Nav.Link href="/how-it-works">How it works</Nav.Link>
          <Nav.Link href="/our-impact">Our Impact</Nav.Link>
          <Nav.Link href="/4p-news">4P News</Nav.Link>
        </Nav>
        <Link to="/shop" className="nav-link btn btn-primary">Shop</Link>
      </Navbar>
      <div id="mobilenav">
        <Nav.Link href="#" className="bg-teal" onClick={() => setMobileNavVisibility(!showMobileNav)}>Menu</Nav.Link>
        {showMobileNav && (
          <>
            <div className="bg-secondary">
              <Nav.Link href="/how-it-works">How It Works</Nav.Link>
              <Nav.Link href="/our-impact">Out Impact</Nav.Link>
              <Nav.Link href="/4p-news">4P News</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </div>
            <div className="bg-primary">
              <Link to="/shop" className="btn btn-primary btn-block">Shop</Link>
            </div>
          </>
        )}
      </div>
    </header>
  )
}


export default Header
