import React from 'react'

const SearchFilterBar = () => {
  return (
    <>
     <div class="container">
      <nav id="filternav" class="navbar navbar-expand-lg">
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#productnav" aria-controls="productnav"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="arrow-down"></span>
        </button>
        <div id="search-filter-nav" class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item">
              <form class="bd-search d-flex align-items-center" action="/search" method="get">
                <input type="search" class="form-control" id="search-query" name="q" placeholder="Search"
                  aria-label="Search for..."/>
                <button class="btn btn-link bd-search-docs-toggle d-md-none p-0 ml-3" type="button" data-toggle="collapse"
                  data-target="#bd-docs-nav" aria-controls="bd-docs-nav" aria-expanded="false"
                  aria-label="Toggle docs navigation">
                </button>
              </form>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Produce</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Meat</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Dairy</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Snacks</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Bakery</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Prepared</a>
            </li>
            <li class="ml-lg-auto">
              <div class="styled-select">
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
