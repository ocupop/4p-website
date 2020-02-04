import React from 'react'
import parse from 'html-react-parser'
import { useStaticQuery, graphql } from 'gatsby'

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      includes(slug: { eq: "footer" }) {
        output
      }
    }
  `)

  return (
    <>
    <h1>Footer</h1>
      {parse(data.includes.output)}
    </>
  )
}

export default Footer
