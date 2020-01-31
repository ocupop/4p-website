import React from 'react'
import PropTypes from 'prop-types'
import parse from 'html-react-parser'
import { useStaticQuery, graphql } from 'gatsby'

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      allIncludes(filter: { includes_id: { eq: "/includes/header" } }) {
        edges {
          node {
            includes_id
            output
            path
          }
        }
      }
    }
  `)

  const output = data.allIncludes.edges[0].node.output

  return <div>{parse(output)}</div>
}

export default Header
