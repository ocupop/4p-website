import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/ui/Header'
import Footer from '../components/ui/Footer'
// import ProductVariant from '../components/products/ProductVariant'
import ProductItem from '../components/products/ProductItem'

const ShopByProduct = ({ data }) => {
  return (
    <>
      <Header siteTitle="Shop Home" />

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
            {data.allProducts.edges.map((product, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className="content">
                  <ProductItem product={product.node} />
                </div>
              </div>
              // return products.node.variants.map(variant => {
              //   return <ProductVariant key={variant.sku} variant={variant} />
              // })
            ))}
          </div>
        </div>
      </section> 
      

      <Footer siteTitle="Shop Home" />
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
