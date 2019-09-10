import React from 'react'
import HEAD from "../common/ui/head"

import { ProductGrid as ShopifyProductGrid } from '../features/shopify/ProductGrid'

const StorePage = () => (
  <>
    <HEAD title="Shopify Store" />
    <section>
      <div className="container">
        <div className="row">
          <div className="col-10">
            <h3 className="lead">This is a product grid pulled from Shopify data source.</h3>
          </div>
          <hr />
        </div>
      </div>
    </section>
    <ShopifyProductGrid />
  </>
)

export default StorePage