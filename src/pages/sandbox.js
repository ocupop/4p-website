import React from "react"
import HEAD from "../common/ui/head"

import { ShopProvider } from '../features/shop/ShopContext'
import ShopFilters from '../features/shop/ShopFilters'
import ShopList from '../features/shop/ShopList'



const Sandbox = () => (
  <>
    <HEAD title="Sandbox" />
    <ShopProvider>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1><strong>Aloha!</strong></h1>
              <p className="lead">Welcome to your new Gatsby site.</p>
              <p>Now go build something great.</p>
            </div>
            <hr />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ShopFilters />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <ShopList />
            </div>
          </div>
        </div>
      </section>
    </ShopProvider>
  </>
)

export default Sandbox