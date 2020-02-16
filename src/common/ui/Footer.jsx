import React from 'react'
import _ from 'lodash'
import parse from 'html-react-parser';
import { useStaticQuery, graphql } from 'gatsby'

const pageComponents = {
  // TODO: Import and list all acceptable components that may get included inline page content.
}

const parseOptions = {
  replace: ({ attribs, name }) => {
    if (!attribs) return;

    if (name.includes('-')) {
      const component = _.upperFirst(_.camelCase(name))
      return React.createElement(pageComponents[component], attribs)
    }
  }
}

const Footer = () => {
  const {elements:{output:content}} = useStaticQuery(graphql`
    {
      elements(slug: { eq: "footer" }) {
        output
      }
    }
  `)

  return (
    <>
      {parse(content, parseOptions)}
    </>
  )
}

export default Footer
