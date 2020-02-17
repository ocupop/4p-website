import React from 'react'
import _ from 'lodash'
import parse from 'html-react-parser';
import { useStaticQuery, graphql } from 'gatsby'

import CartSummary from '../../features/cart/CartSummary'
import UserNav from './UserNav'
import NotificationNav from './NotificationNav'

const pageComponents = {
  // TODO: Import and list all acceptable components that may get included inline page content.
  CartSummary,
  UserNav,
  NotificationNav
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