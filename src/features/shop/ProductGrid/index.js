import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'


const ProductGrid = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allShopifyProduct(
          sort: {
            fields: [createdAt]
            order: DESC
          }
        ) {
          edges {
            node {
              id
              title
              handle
              description
              updatedAt
              createdAt
              images {
                id
                originalSrc
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 910) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
              variants {
                price
              }
            }
          }
        }
      }
    `
  )

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="cards">
            {data.allShopifyProduct.edges.map(item => (
              <Link key={item.node.id} className="card" to={`/shop/${item.node.handle}/`}>
                <Image
                  className="card-img-top"
                  fluid={item.node.images[0].localFile.childImageSharp.fluid}
                  alt={item.node.handle}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.node.title}</h5>
                  <p className="card-text">{item.node.description}</p>
                </div>
                <div className="card-footer">
                  <p className="card-text"><small className="text-muted">Last updated {item.node.updatedAt}</small></p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductGrid
