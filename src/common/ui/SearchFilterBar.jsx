import React from 'react'

const SearchFilterBar = () => {
  return (
    <>
     <div className="container">
      <nav id="filternav" className="navbar navbar-expand-lg">
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#search-filter-nav" aria-controls="productnav"
          aria-expanded="false" aria-label="Toggle navigation">
          <small>Filters</small> <i className="ri-filter-line"></i>
        </button>
        <div id="search-filter-nav" className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <form className="bd-search d-flex align-items-center" action="/search" method="get">
                <input type="search" className="form-control" id="search-query" name="q" placeholder="Search"
                  aria-label="Search for..."/>
                <button className="btn btn-link bd-search-docs-toggle d-md-none p-0 ml-3" type="button" data-toggle="collapse"
                  data-target="#bd-docs-nav" aria-controls="bd-docs-nav" aria-expanded="false"
                  aria-label="Toggle docs navigation">
                </button>
              </form>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Produce</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Meat</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Dairy</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Snacks</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Bakery</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Prepared</a>
            </li>
            <li className="ml-lg-auto">
              <div className="styled-select">
                <select name="" id="">
                  <option value="">option 1</option>
                  <option value="">option 2</option>
                  <option value="">option 3</option>
                </select>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div> 
    </>
  )
}

export default SearchFilterBar
