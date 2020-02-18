import React from 'react'
import { Link } from "gatsby"
import SearchFilterBar from "../../common/ui/SearchFilterBar"

const shopyByProduct = () => {
  return (
    <>
      <SearchFilterBar/>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <div className="responsive-card-deck cards-md-2 cards-lg-3 cards-xl-4">
                  <div className="card product-card">
                    <Link to={`/sandbox/product`}>
                      <div
                        className="bg-image aspect-4x3"
                        style={{ backgroundImage: `url(https://via.placeholder.com/500x400)` }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">Product Name</h5>
                        <h6>Vendor Name</h6>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="product-amount">Variant Name <em>Variant Label</em></div>
                          <div className="product-price">$5.55</div>
                        </div>
                      </div>
                    </Link>
                    <div className="card-footer d-flex align-items-center p-0">

                    </div>
                  </div>
                  <div className="card product-card">
                    <Link to={`/sandbox/product`}>
                      <div
                        className="bg-image aspect-4x3"
                        style={{ backgroundImage: `url(https://via.placeholder.com/500x400)` }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">Product Name</h5>
                        <h6>Vendor Name</h6>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="product-amount">Variant Name <em>Variant Label</em></div>
                          <div className="product-price">$5.55</div>
                        </div>
                      </div>
                    </Link>
                    <div className="card-footer d-flex align-items-center p-0">

                    </div>
                  </div>
                  <div className="card product-card">
                    <Link to={`/sandbox/product`}>
                      <div
                        className="bg-image aspect-4x3"
                        style={{ backgroundImage: `url(https://via.placeholder.com/500x400)` }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">Product Name</h5>
                        <h6>Vendor Name</h6>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="product-amount">Variant Name <em>Variant Label</em></div>
                          <div className="product-price">$5.55</div>
                        </div>
                      </div>
                    </Link>
                    <div className="card-footer d-flex align-items-center p-0">

                    </div>
                  </div>
                  <div className="card product-card">
                    <Link to={`/sandbox/product`}>
                      <div
                        className="bg-image aspect-4x3"
                        style={{ backgroundImage: `url(https://via.placeholder.com/500x400)` }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">Product Name</h5>
                        <h6>Vendor Name</h6>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="product-amount">Variant Name <em>Variant Label</em></div>
                          <div className="product-price">$5.55</div>
                        </div>
                      </div>
                    </Link>
                    <div className="card-footer d-flex align-items-center p-0">

                    </div>
                  </div>
                  <div className="card product-card">
                    <Link to={`/sandbox/product`}>
                      <div
                        className="bg-image aspect-4x3"
                        style={{ backgroundImage: `url(https://via.placeholder.com/500x400)` }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">Product Name</h5>
                        <h6>Vendor Name</h6>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="product-amount">Variant Name <em>Variant Label</em></div>
                          <div className="product-price">$5.55</div>
                        </div>
                      </div>
                    </Link>
                    <div className="card-footer d-flex align-items-center p-0">

                    </div>
                  </div>
                  <div className="card product-card">
                    <Link to={`/sandbox/product`}>
                      <div
                        className="bg-image aspect-4x3"
                        style={{ backgroundImage: `url(https://via.placeholder.com/500x400)` }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">Product Name</h5>
                        <h6>Vendor Name</h6>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="product-amount">Variant Name <em>Variant Label</em></div>
                          <div className="product-price">$5.55</div>
                        </div>
                      </div>
                    </Link>
                    <div className="card-footer d-flex align-items-center p-0">

                    </div>
                  </div>
                  <div className="card product-card">
                    <Link to={`/sandbox/product`}>
                      <div
                        className="bg-image aspect-4x3"
                        style={{ backgroundImage: `url(https://via.placeholder.com/500x400)` }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">Product Name</h5>
                        <h6>Vendor Name</h6>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="product-amount">Variant Name <em>Variant Label</em></div>
                          <div className="product-price">$5.55</div>
                        </div>
                      </div>
                    </Link>
                    <div className="card-footer d-flex align-items-center p-0">

                    </div>
                  </div>
                  <div className="card product-card">
                    <Link to={`/sandbox/product`}>
                      <div
                        className="bg-image aspect-4x3"
                        style={{ backgroundImage: `url(https://via.placeholder.com/500x400)` }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">Product Name</h5>
                        <h6>Vendor Name</h6>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="product-amount">Variant Name <em>Variant Label</em></div>
                          <div className="product-price">$5.55</div>
                        </div>
                      </div>
                    </Link>
                    <div className="card-footer d-flex align-items-center p-0">

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default shopyByProduct
