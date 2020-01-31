import React from 'react'
import Header from '../components/ui/Header'
import Footer from '../components/ui/Footer'
import { Carousel } from 'react-bootstrap'
import Tag from '../components/ui/Tag'
import ProductItem from '../components/products/ProductItem'
import ProductVariant from '../components/products/ProductVariant'

const ProductDetail = ({ data }) => {
  const mustardProduct = data.allProducts.edges[0].node
  return (
    <div>
      <Header siteTitle="Shop Home" />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content">
                <h1 className="h2">Product Title</h1>
                <p className="mb-5">product description Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga fugiat quae laboriosam culpa nesciunt, quis distinctio iusto numquam velit temporibus, eum, quisquam hic. Ratione, sequi!</p>
                {/* TODO create variant select component */}
                <div className="form-group">
                  <select className="form-control" name="variant-select" id="variant-select">
                    {mustardProduct.variants.map(variant => (
                      <>
                        <option key={variant.sku} value={variant.sku}>{variant.name}</option>
                      </>
                    )
                    )}
                  </select>
                </div>
                
                <div className="product-price mb-2">$5.55</div>
                <div className="product-amount">1/2 Dozen</div>
                <div className="d-flex align-items-center mt-3">
                  <button className="product-button w-50">
                    Weekly<br/>
                      Delivery
                  </button>
                  <button className="product-button w-50">
                    One-Time<br/>
                      Purchase
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <Carousel>
                  <Carousel.Item>
                    <div className="bg-image aspect-4x3"
                      style={{
                        backgroundImage: `url(https://via.placeholder.com/800x500/000)`
                      }}
                    ></div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="bg-image aspect-4x3"
                      style={{
                        backgroundImage: `url(https://via.placeholder.com/800)`
                      }}
                    ></div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="bg-image aspect-4x3"
                      style={{
                        backgroundImage: `url(https://via.placeholder.com/800)`
                      }}
                    ></div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr/>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content">
                <h2>Product Details</h2>
                <div className="d-flex">
                  <span className="product-detail-tag">Certified Organic</span>
                  <span className="product-detail-tag">Local</span>
                  <span className="product-detail-tag">Seasonal</span>
                  {/* <Tag name="Tag1" />
                  <Tag name="Tag2" />
                  <Tag name="Tag3" /> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <h2>Ingredients:</h2>
                <span>Eggs</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr/>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content">
                <div className="bg-image aspect-4x3"
                  style={{
                    backgroundImage: `url(https://via.placeholder.com/800)`
                  }}
                ></div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <h2>From Whiffletree Farms</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quia nihil omnis temporibus voluptatibus nostrum similique ad quae rem, suscipit dolores ex! Libero veniam, sit molestias maxime ratione perspiciatis officiis, illo tempore tenetur velit ducimus!</p>
                <div className="row">
                  <div className="col-lg-6">
                    <span className="text-uppercase text-light">30 Miles from you</span>
                  </div>
                  <div className="col-lg-6">
                    <a href="#">whiffletreefarms.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="content">
                <h2 class="h1">We Recommend</h2>
              </div>
            </div>
          </div>
          <div class="row no-gutters">
            <div class="col-md-6 col-lg-3">
              <div class="content">
                {/* TODO loop through recommended products */}
                <ProductItem product={mustardProduct}/>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 
      <h2>We Recommend</h2> 
      {mustardProduct.variants.map(variant => {
        return <ProductVariant key={variant.sku} variant={variant} />
      })}*/}

      <Footer siteTitle="Shop Home" />
    </div>
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

export default ProductDetail