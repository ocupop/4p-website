import React from "react"
import { connectStateResults } from "react-instantsearch-dom"

export default connectStateResults(({ searchResults }) => {
  if (searchResults === null || searchResults.nbHits === 0) return <div />;
  return (
    searchResults.query !== "" && 
      <div className="ais-Stats border-bottom pb-2 mb-3">
        <strong>{searchResults.nbHits}</strong> results found{" "}
        {searchResults.query !== "" && (
          <>
            for <strong>{`"${searchResults.query}"`}</strong>
          </>
        )}{" "}
        {/* in <strong>{searchResults.processingTimeMS}ms</strong> */}
      </div>
  )
})