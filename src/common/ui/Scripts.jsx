import React from 'react'
import parse from 'html-react-parser';
import { useStaticQuery, graphql } from 'gatsby'

const Scripts = () => {
  const { elements: { output: content } } = useStaticQuery(graphql`
    {
      elements(slug: { eq: "js" }) {
        output
      }
    }
  `)

  return (
    <>
      {parse(content)}
    </>
  )
}

export default Scripts