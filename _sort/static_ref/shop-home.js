/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import ProductItem from '../components/products/ProductItem'
import CollectionCard from '../components/collection/CollectionCard'

const ShopHome = ({
  data

}) => {
  const mustardProduct = data.allProducts.edges[0].node

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h1>Suggested Goods</h1>
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            {/* TODO loop through suggest products */}
            {data.allProducts.edges.map((product, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className="content">
                  <ProductItem product={product.node} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h1>Collections</h1>
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            {/* TODO loop through collections, show 2 */}
            <div className="col-lg-6">
              <div className="content">
                <CollectionCard />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h2>Recently Added</h2>
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            {/* TODO loop through recently added products */}
            <div className="col-lg-3">
              <div className="content">
                <ProductItem product={mustardProduct} />
              </div>
            </div>
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

export default ShopHome
