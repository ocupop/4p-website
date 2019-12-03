import React from "react"
import HEAD from "../components/ui/head"
import FirebaseSandbox from '../components/FirebaseSandbox'
// import { ShopProvider } from '../features/shop/ShopContext'
// import ShopFilters from '../features/shop/ShopFilters'
// import ShopList from '../features/shop/ShopList'



const Sandbox = () => (
  <>
    <HEAD title="Sandbox" />
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1><strong>Aloha!</strong></h1>
            <p className="lead">Testing Integration w/Firebase.</p>
          </div>
          <hr />
          <div className="col-12">
            <FirebaseSandbox />
          </div>
        </div>
      </div>
    </section>
    {/* <ShopProvider>
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
    </ShopProvider> */}
  </>
)

export default Sandbox