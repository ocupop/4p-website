import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'


const ProductPage = ({ data }) => {
  const { product } = data
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h1>{product.title}</h1>
            <p>Price Range: {product.priceRange.minVariantPrice} - {product.priceRange.maxVariantPrice}</p>
            <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
          </div>
        </div>
      </div>
    </section>
  )
}

ProductPage.propTypes = {
  data: PropTypes.object,
  // product: PropTypes.shape({
  //   title: PropTypes.string,
  //   descriptionHtml: PropTypes.string,
  //   tags: PropTypes.array,
  //   priceRange: PropTypes.object,
  // }),
}

export const query = graphql`
  query($id: String!) {
    product(id: { eq: $id }) {
      id
      title
      descriptionHtml
      tags
      priceRange {
        maxVariantPrice
        minVariantPrice
      }
    }
  }
`

export default ProductPage
