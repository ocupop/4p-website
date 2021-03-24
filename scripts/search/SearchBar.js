import React from 'react'
// import PropTypes from 'prop-types'
import algoliasearch from 'algoliasearch/lite'
import {
  InstantSearch,
  // Pagination,
  Configure,
  // Panel,
  // InfiniteHits,
  connectSearchBox
} from "react-instantsearch-dom"

import Content from "./Content"
import Facet from "./Facet"
// import { autocomplete } from './searchHelpers'

const searchClient = algoliasearch('6I01FP0C7C', 'cd32c8b8875db250abfc54be7af34c2d')

const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => (
  <form noValidate action="" role="search">
    <div className="form-group">
      <label htmlFor="querystring" className="sr-only">Search</label>
      <input
        type="search"
        className="form-control"
        id="querystring"
        aria-describedby="queryHelp"
        value={currentRefinement}
        onChange={event => refine(event.currentTarget.value)}
      />
      <small id="queryHelp" className="form-text text-muted">Begin typing to filter search results...</small>
    </div>
    {/* <button onClick={() => refine('')}>Reset query</button> */}
    {isSearchStalled ? 'My search is stalled' : ''}
  </form>
)
const CustomSearchBox = connectSearchBox(SearchBox)

const SearchBar = () => {
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName='refed.com'
    >
      <Configure
        // hitsPerPage={20}
        attributesToSnippet={["content:60"]}
        snippetEllipsisText={" ..."}
      // enablePersonalization={true}
      />
      <div className="bg-light p-3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 class="h3">Search 4pFoods:</h1>
              <div id="searchbox">
                {/* Uncomment the following widget to add a search bar */}
                <CustomSearchBox
                  translations={{ placeholder: "Search 4pFoods..." }}
                  searchAsYouType={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="pt-3">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3 d-none">
              <div id="filters">
                {/* Uncomment the following widget to add categories list */}
                <h6 className="border-bottom pb-2">Filters</h6>
                <Facet attribute="categories" />
              </div>
            </div>
            <div className="col-12 col-lg-10">
              <div id="hits">
                {/* Uncomment the following widget to add hits list */}
                <Content />
              </div>
            </div>
          </div>
        </div>
      </section>
    </InstantSearch>
  )
}

SearchBar.propTypes = {

}

export default SearchBar
