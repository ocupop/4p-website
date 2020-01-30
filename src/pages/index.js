import React from 'react'
import PropTypes from 'prop-types'
import parse from 'html-react-parser';

const HomePage = ({data}) => {
  return (
    <div>
      { parse(data.allIncludes.edges[0].node.output) }
      <h1>Homepage</h1>
    </div>
  )
}

export const query = graphql`
  {
    allIncludes(filter: {includes_id: {eq: "/includes/header"}}) {
      edges {
        node {
          includes_id
          output
          path
        }
      }
    }
  }
`

export default HomePage
