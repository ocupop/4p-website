import React from 'react'
import CollectionCard from '../components/collection/CollectionCard'

const ShopByCollection = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h1>Collections</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="content">
                <p>4PFoods Collections are curated each week to offer the best our partners have to offer. Choose from our Produce, Protein, Dairy, and Office/Snack Collections--all are available in several sizes and include a variety of goods, which you can easily edit to best suit your particular lifestyle and nutritional needs.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <p>Your 4P Collection will be delivered once a week, unless you choose to skip a week. You can also place a one-time order whenever you want. It's all easy, convenient, fast...and fresh.</p>
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            {/* TODO loop through collections */}
            <div className="col-lg-6">
              <div className="content">
                <CollectionCard/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ShopByCollection
