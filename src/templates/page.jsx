import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import _ from 'lodash'
import parse from 'html-react-parser'
import FeaturedProducts from '../features/product/FeaturedProducts'
import TryUs from '../common/ui/TryUs'

const pageComponents = {
  FeaturedProducts,
  TryUs
}

const parseOptions = {
  replace: ({ attribs, name }) => {
    if (!attribs) return

    if (name.includes('-')) {
      const component = _.upperFirst(_.camelCase(name))
      // Note that attribs converts to lower case, for example
      // vendorID would come through as vendorID.
      // Within the react component when destructing props we need to assign it back
      // example: { vendorid: vendorID }
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
