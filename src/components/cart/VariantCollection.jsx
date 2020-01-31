import React from 'react'
import CollectionItem from './CollectionItem'
import VariantItem from './VariantItem'


const VariantCollection = ({ collection }) => {
  return (
    <>
      <CollectionItem collection={collection} />
      <div className="row">
        <div className="col-lg-9 ml-lg-auto">
          <div className="content">
            <h3>
              This week's goods
              <button
                className="btn btn-link text-secondary"
                type="button"
                data-toggle="collapse"
                data-target="#collapse-1"
                aria-expanded="false"
                aria-controls="collapse-1">
                <span className="hide-text">Hide</span>
                <span className="show-text">Show</span> Items
              </button>
            </h3>
          </div>
        </div>
        <div className="col-lg-9 ml-lg-auto">
          <div id="collapse-1" className="collapse show">
          {collection.variants.map(variant => (
            <VariantItem variant={variant} />
          ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default VariantCollection
