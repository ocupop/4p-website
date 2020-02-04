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
      {parse(data.output)}
    </>
  )
}

export default Footer
