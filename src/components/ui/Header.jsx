import React from 'react'
import PropTypes from 'prop-types'
import parse from 'html-react-parser'
import { useStaticQuery, graphql } from 'gatsby'
import useImageReplacer from '../../hooks/useImageReplacer'

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
      allFile(filter: {sourceInstanceName: {eq: "images"}}) {
        edges {
          node {
            id
            absolutePath
            name
          }
        }
      }
    }
  `)

  const output = data.allIncludes.edges[0].node.output

  return (
    <div>
      {parse(output, {
        replace: function(domNode) {
          if (domNode.name === 'img') {
            console.log(__dirname);
            const path = useImageReplacer(domNode.attribs.src)
            domNode.attribs.src = path
          }
        },
      })}
    </div>
  )
}

export default Header
