import React, { useContext } from 'react'
import { ShopContext } from './ShopContext'
import useFilter from '../../common/hooks/useFilter'

function ShopFilters() {
  const [state, setState] = useContext(ShopContext)
  const { matchFilters } = useFilter(ShopContext)


  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => matchFilters()}
      >
        Filtered: {state.isFiltered ? "TRUE" : "FALSE"}
      </button>
      <hr />
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setState(state => ({ ...state, filters: { ...state.filters, showFeatured: !state.filters.showFeatured } }))}
      >
        Click to toggle featured: {state.filters.showFeatured ? "TRUE" : "FALSE"}
      </button>
      <hr />
    </div>
  )
}

export default ShopFilters
