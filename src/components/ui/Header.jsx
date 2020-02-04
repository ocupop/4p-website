import React from 'react'
import parse from 'html-react-parser'
import { useStaticQuery, graphql } from 'gatsby'

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
      {parse(data.output)}
    </>
  )
}

export default Header