import React from 'react'
import PropTypes from 'prop-types'
import parse from 'html-react-parser'
import { useStaticQuery, graphql } from 'gatsby'

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      allIncludes(filter: { includes_id: { eq: "/includes/footer" } }) {
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
  return <div>{parse(data.allIncludes.edges[0].node.output)}</div>
}

export default Footer
