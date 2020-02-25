import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import _ from 'lodash'
import parse from 'html-react-parser'
import FeaturedProducts from '../features/product/FeaturedProducts'

const pageComponents = {
  FeaturedProducts
}

const parseOptions = {
  replace: ({ attribs, name }) => {
    if (!attribs) return

    if (name.includes('-')) {
      const component = _.upperFirst(_.camelCase(name))
      return React.createElement(pageComponents[component], attribs)
    }
  }
}

const PageTemplate = ({
  data: {
    pages: { content }
  }
}) => {
  return <>{parse(content, parseOptions)}</>
}

export const query = graphql`
  query($id: String!) {
    pages(id: { eq: $id }) {
      title
      content
    }
  }
`

PageTemplate.propTypes = {
  data: PropTypes.instanceOf(Object)
}

export default PageTemplate
