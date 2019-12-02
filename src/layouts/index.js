import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import HEAD from "../components/ui/head"
import Header from '../components/ui/header'
import Footer from '../components/ui/footer'
import 'remixicon/fonts/remixicon.css'
import '../../content/_scss/main.scss'

function Layout({ children, location: { pathname } }) {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <HEAD />
      {/* {pathname === '/' ? '' : ''} */}
      <Header siteTitle={data.site.siteMetadata.title} />

      <main id="pageContent">
        {children}
      </main>

      <Footer siteTitle={data.site.siteMetadata.title} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}

export default Layout


