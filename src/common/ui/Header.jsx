import React from 'react'
import parse from 'html-react-parser'
import { useStaticQuery, graphql } from 'gatsby'
import CartSummary from '../../features/cart/CartSummary'
import UserNav from '../../common/ui/UserNav'
import NotificationNav from '../../common/ui/NotificationNav'

const pageComponents = {
  // TODO: Import and list all acceptable components that may get included inline page content.
  CartSummary,
  UserNav,
  NotificationNav
}

const parseOptions = {
  replace: ({ attribs, name }) => {
    // console.log(name, attribs)
    if (!attribs) return;

    if (name.includes('-')) {
      const component = _.upperFirst(_.camelCase(name))
      return React.createElement(pageComponents[component], attribs)
    }
  }
}

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      includes(slug: { eq: "header" }) {
        output
      }
    }
  `)

  return (
    <>
      {parse(data.includes.output, parseOptions)}
    </>
  )
}

export default Header