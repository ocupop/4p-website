import React from 'react'
import _ from 'lodash'
import parse from 'html-react-parser';
import { useStaticQuery, graphql } from 'gatsby'

import AuthNav from '../../features/auth/AuthNav'
import CartSummary from '../../features/cart/CartSummary'

const pageComponents = {
  AuthNav,
  CartSummary
}

const parseOptions = {
  replace: ({ attribs, name }) => {
    if (!attribs) return;

    if (name.includes('-')) {
      const component = _.upperFirst(_.camelCase(name))
      // @TODO: Write logic to check if component isExists. If not - throw error
      return React.createElement(pageComponents[component], attribs)
    }
  }
}

const Header = () => {
  const {elements: {output:content}} = useStaticQuery(graphql`
    {
      elements(slug: { eq: "header" }) {
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

export default Header