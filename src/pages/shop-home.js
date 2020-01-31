import React from 'react'
import Header from '../components/ui/Header'
import Footer from '../components/ui/Footer'
import ProductItem from '../components/products/ProductItem'
import ProductVariant from '../components/products/ProductVariant'

const ShopHome = ({ data }) => {
  const mustardProduct = data.allProducts.edges[0].node
  return (
    <>

      <section>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="content">
                <h1>Suggested Goods</h1>
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            {/* loop through suggest products */}
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
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="content">
                <h1>Collections</h1>
              </div>
            </div>
          </div>
          <div class="row no-gutters">
            {/* loop through collections, show 2 */}
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="content">
                <h2>Recently Added</h2>
              </div>
            </div>
          </div>
          <div class="row no-gutters">
            {/* loop through recently added */}
          </div>
        </div>
      </section>
      <h1>ShopHome</h1>
      <h2>Suggested Goods</h2>
      <ProductVariant variant={mustardProduct.variants[0] } />
      <h2>Collections</h2>
      <ProductItem product={mustardProduct } />
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
