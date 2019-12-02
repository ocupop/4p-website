/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from "gatsby"
import _ from 'lodash'
import parse from 'html-react-parser';

const pageComponents = {
  // TestComponent
}

const parseOptions = {
  replace: ({attribs, name}) => {
    if (!attribs) return;

    if (name.includes('-')) {
      const component = _.upperFirst(_.camelCase(name))
      return React.createElement(pageComponents[component], attribs)
    }
  }
}

const HomepageTemplate = ({
  data: {
    contentPage: {
      htmlContent
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
    contentPage(id: {eq: $id }) {
      title
      htmlContent
    }
  }`

export default HomepageTemplate
