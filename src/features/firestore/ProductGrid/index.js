import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'


export const ProductGrid = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allProduct(
          sort: {
            fields: [title]
            order: DESC
          }
        ) {
          edges {
            node {
              id
              title
              description
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
            {data.allProduct.edges.map(item => (
              <Link key={item.node.id} className="card" to={`/firestore/${item.node.id}/`}>
                <div className="card-body">
                  <h5 className="card-title">{item.node.title}</h5>
                  <div className="card-text" dangerouslySetInnerHTML={{ __html: item.node.descriptionHtml }} />
                </div>
                <div className="card-footer">
                  Date
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

