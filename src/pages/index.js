import React from "react"

import Image from "../common/ui/image"
import HEAD from "../common/ui/head"


const IndexPage = () => (
  <>
    <HEAD title="Home" />
    <section>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <Image />
          </div>
          <div className="col-10">
            <h1><strong>Aloha!</strong></h1>
            <p className="lead">Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
          </div>
          <hr />
        </div>
      </div>
    </section>
  </>
)

export default IndexPage