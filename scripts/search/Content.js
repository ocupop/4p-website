import React from "react"
import { Hits, Pagination } from "react-instantsearch-dom"
import { connectStateResults } from "react-instantsearch/connectors"
import Hit from "./Hit.js"
import Stats from './Stats'

export default connectStateResults(
  ({ searchState, searchResults }) =>
    searchState && searchState.query ? (
      <>
        <div id="stats">
          {/* Uncomment the following widget to add search stats */}
          <Stats />
        </div>
        <Hits hitComponent={Hit} />
        <div id="pagination">
          {/* Uncomment the following widget to add pagination */}
          <Pagination />
        </div>
      </>
    ) : //<div>No query</div>
      null
  // return searchResults && searchResults.nbHits !== 0 ? (
  //   <Hits hitComponent={Hit} />
  // ) : (
  //   <div className="alert alert-warning">
  //     No results found for <strong>{searchState.query}</strong>.
  //   </div>
  // )

)
