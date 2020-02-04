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
      {parse(data.includes.output)}
    </>
  )
}

export default Footer
