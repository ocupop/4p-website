import React from 'react'
import PropTypes from 'prop-types'
import { Highlight, Snippet } from 'react-instantsearch-dom'

const Hit = ({ hit }) => {

  return (
    <div className="card bg-transparent">
      <a href={hit.url}>
        <div
          className="bg-image aspect-4x3"
          style={{ backgroundImage: `url(${hit.featured_image})` }}
        ></div>
      </a>
      <div className="card-body">
        <h4><Highlight attribute="title" hit={hit} tagName="strong" /></h4>
        <div>
          <Snippet attribute="content" hit={hit} tagName="strong" />
        </div>
      </div>
      <div className="card-footer bg-transparent">
        <a href={hit.url} className="btn btn-secondary text-white">Read More</a>
      </div>
    </div>
  )
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
}

export default Hit