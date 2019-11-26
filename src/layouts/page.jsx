/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from "gatsby"
import _ from 'lodash'
import parse from 'html-react-parser';

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


const PageTemplate = ({
  data: {
    page: {
      htmlContent,
      frontmatter: {

      }
    }
  } }) => {

  return (
    <>
      {parse(htmlContent, parseOptions)}
    </>
  )
}


export const query = graphql`
  query($id: String!) {
    page(id: {eq: $id }) {
      title
      htmlContent
      frontmatter {

      }
    }
  }`

export default PageTemplate
