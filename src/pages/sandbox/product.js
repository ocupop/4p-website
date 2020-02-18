import React from 'react'
import ImageModal from '../../features/modal/ImageModal'
const product = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h1>product sandbox</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content">
                <h1 className="h2">Product name</h1>
                <p className="mb-5">Product description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam numquam laudantium veritatis quaerat non tenetur maxime alias, vel illo a voluptate neque asperiores nobis, eius, reprehenderit unde nostrum repellendus! Sed.</p>
                <div className="product-price mb-2">
                  5.55
                </div>
                <div className="product-amount">
                  Size
                </div>
                <div className="d-flex align-items-center mt-3">
                  {/* @TODO: Add to cart */}
                </div>
                <ImageModal />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <div
                  className="bg-image aspect-4x3"
                  style={{
                    backgroundImage: `url(https://via.placeholder.com/768x500)`
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content">
                <h2>Product Details</h2>
                <div className="d-flex flex-wrap">
                  <span className="product-detail-tag mb-2">
                    Tag 1
                  </span>
                  <span className="product-detail-tag mb-2">
                    Tag 2
                  </span>
                  <span className="product-detail-tag mb-2">
                    Tag 3
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <h2>Ingredients:</h2>
                <p>Ingredients Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint alias quisquam accusantium ex sapiente consequatur, facilis porro nam velit, culpa dolor officiis? Similique sapiente iure harum facere, distinctio magni nobis.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <h3>Storage Tips</h3>
                <p>Storage lorem </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content">
                <div
                  className="bg-image aspect-4x3"
                  style={{
                    backgroundImage: `url(https://via.placeholder.com/500x400)`
                  }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <h2>
                  From Vendor Name
                </h2>

                <p>Vendor Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, libero sit ratione id quae fugit earum dolores modi ipsa facere doloribus? Voluptate quos qui quod aliquid, mollitia sapiente ipsa impedit!</p>

                <div className="row">
                  <div className="col-lg-6">
                    <span className="text-uppercase">
                      {/* @TODO - Calculate proximity from vendor.location */}
                      30 Miles from you
                    </span>
                  </div>
                  <div className="col-lg-6">
                    <a href="#">www.vendorwebsite.com</a>
                  </div>
                </div>
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
                <h2 className="h1">We Recommend</h2>
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-md-6 col-lg-3">
              <div className="content">
                {/* @TODO: Add logic required for recommended products */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default product

