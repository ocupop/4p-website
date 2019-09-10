import React from 'react'
import { graphql } from 'gatsby'

import ProductForm from '../ProductForm'
import Image from 'gatsby-image'

const ProductPage = ({ data }) => {
  const product = data.shopifyProduct
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="d-flex">
              {product.images.map(image => (
                <Image
                  className="col"
                  fluid={image.localFile.childImageSharp.fluid}
                  key={image.id}
                  alt={product.title}
                />
              ))}
            </div>
            <h1>{product.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
          </div>
          <div className="col-4">
            <ProductForm product={product} />
          </div>
        </div>
      </div>
    </section>
  )
}

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default ProductPage
