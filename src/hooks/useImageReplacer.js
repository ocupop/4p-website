import { useEffect, useState } from 'react'
import { useStaticQuery, graphql } from "gatsby"

export const useImageReplacer = (image) => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: {sourceInstanceName: {eq: "images"}}) {
        edges {
          node {
            id
            absolutePath
            relativePath
            name
          }
        }
      }
    }
  `)

  const [absolutePath, setAbsolutePath] = useState(null)

  const getFileNameFromPath = (filePath) => {
    return filePath.replace(/^.*[\\\/]/, '')
  }

  useEffect(() => {
    const images = data.allFile.edges[0].node;
    if (getFileNameFromPath(image) === images.relativePath) {
      setAbsolutePath(images.absolutePath)
    }
  }, [])

  return absolutePath
}

export default useImageReplacer