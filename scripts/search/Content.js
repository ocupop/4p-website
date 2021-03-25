import React from "react"
import { Hits, Pagination } from "react-instantsearch-dom"
import { connectStateResults } from "react-instantsearch/connectors"
import Hit from "./Hit.js"

export default connectStateResults(
  ({ searchState, searchResults }) => {
    // searchState && searchState.query ? (
    //   <>
    //     <Hits hitComponent={Hit} />
    //   </>
    // ) : //<div>No query</div>
    //   null
    return searchResults && searchResults.nbHits !== 0 ? (
      <Hits hitComponent={Hit} className="card-hits"/>
    ) : (
      <div className="alert alert-warning">
        No results found for <strong>{searchState.query}</strong>.
      </div>
    )
  }
)
