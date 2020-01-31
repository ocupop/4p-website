import React from 'react'
import { graphql, Link } from 'gatsby'
import Header from '../components/ui/Header'
import Footer from '../components/ui/Footer'
import SearchFilterBar from '../components/ui/SearchFilterBar'
import ProductItem from '../components/products/ProductItem'

const ShopByProduct = ({ data }) => {
  return (
    <>
      <section>
        <SearchFilterBar/>
        <div className="container">
          <div className="row no-gutters">
            {data.allProducts.edges.map(product => (
              <div className="col-md-6 col-lg-3" key={product.node.id}>
                <div className="content">
                  <Link to={`/products/${product.node.id}`}>
                    <ProductItem product={product.node} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  {
    allProducts {
      edges {
        node {
          id
          department
          name
          variants {
            size
            unit
            price
            available
            nutritionalLabel
            description
            storageTips
            label
            name
            featuredImage
            quantity
            sku
            nutritionalFacts
          }
        }
      }
    }
  }
`

export default ShopByProduct
