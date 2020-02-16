import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from "gatsby"
import _ from 'lodash'
import parse from 'html-react-parser';

const pageComponents = {
  // TODO: Import and list all acceptable components that may get included inline page content.
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

const TeamTemplate = ({
  data: {
    team: {
      output
    }
  }
}) => {

  return (
    <>
      {parse(output)}
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
