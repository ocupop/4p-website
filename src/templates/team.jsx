import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from "gatsby"
import _ from 'lodash'
import parse, { domToReact } from 'html-react-parser'

const pageComponents = {
  // TODO: Import and list all acceptable components that may get included inline page content.
}


const parseOptions = {
  replace: ({ attribs, name, children }) => {
    if (!attribs) return
    if (attribs.id === 'pageFooter' || attribs.id === 'pageHeader' || name === 'script' || name === 'head') return (<></>)
    if (name === 'html' || name === 'body') {
      return <>{domToReact(children, parseOptions)}</>
    }

    if (attribs.id === 'pageContent') {
      return <>{domToReact(children, parseOptions)}</>
    }

    if (name.includes('-')) {
      const component = _.upperFirst(_.camelCase(name))
      return React.createElement(pageComponents[component], attribs)
    }
  }
}
const TeamTemplate = ({
  data: {
    team: {
      output
    }
  }
}) => {

  return (
    <>
      {parse(output, parseOptions)}
    </>
  )
}


export const query = graphql`
  query($id: String!) {
    team(id: {eq: $id }) {
      title
      output
    }
  }`

TeamTemplate.propTypes = {
  data: PropTypes.instanceOf(Object),
}

export default TeamTemplate
