import React from 'react'
import HEAD from "../common/ui/head"

import { ProductGrid as FirestoreProductGrid } from '../features/firestore/ProductGrid'

const StorePage = () => (
  <>
    <HEAD title="Shopify Store" />
    <section>
      <div className="container">
        <div className="row">
          <div className="col-10">
            <h3 className="lead">This is a product grid pulled from Firestore data source.</h3>
          </div>
          <hr />
        </div>
      </div>
    </section>
    <FirestoreProductGrid />
  </>
)

export default StorePage