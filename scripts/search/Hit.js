import React from 'react'
import PropTypes from 'prop-types'
import { Highlight, Snippet } from 'react-instantsearch-dom'
import { formatDate } from '../helpers'

const Hit = ({ hit }) => {
  // console.log(hit)
  return (
    <div className="col-mb-4">
      <a href={hit.url} className="card bg-transparent">
        <div
          className="bg-image aspect-4x3"
          style={{ backgroundImage: `url(${hit.featured_image})`}}
        ></div>
        <div className="card-body">
          {/* <h4>{{ farmer.title }}</h4> */}
          <Highlight attribute="title" hit={hit} tagName="em" />
        </div>
        <div className="card-footer bg-transparent">
          <button className="btn btn-secondary text-white">Read More</button>
        </div>
      </a>
    </div>
    
    // <div className="row">
    //   <div className="col-2">
    //     <a href={hit.url}>
    //       <img src={hit.featured_image} className="img-fluid" />
    //     </a>
    //   </div>
    //   <div className="col-10">
    //     {hit.item_date && (<small className="text-muted">{formatDate(hit.item_date)}</small>)}
    //     <h5 className="text-serif">
    //       <a href={hit.url} className="text-dark" rel="bookmark">
    //         <Highlight attribute="title" hit={hit} tagName="em" />
    //       </a>
    //     </h5>
    //     <div>
    //       <Snippet attribute="content" hit={hit} />
    //     </div>
    //   </div>
    // </div>
  )
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
}

export default Hit