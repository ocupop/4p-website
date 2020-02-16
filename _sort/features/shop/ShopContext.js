import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
// import axios from 'axios'
import { SHOP_DATA } from './SHOP_DATA'

const ShopContext = React.createContext([{}, () => { }]);

const ShopProvider = ({ children }) => {
  const [state, setState] = useState({
    products: SHOP_DATA,
    isFiltered: false,
    filteredProducts: [],
    filters: {
      showFeatured: false,
    }
  });


  // useEffect(async () => {
  //   const studies = await axios('/data/studies.json')
  //   const sortedStudies = studies.data.sort((a, b) => (a.endDate && a.endDate > b.endDate) ? 1 : (a.endDate === b.endDate) ? ((a.startDate && a.startDate > b.startDate) ? 1 : -1) : -1)

  //   setState({ ...state, studies: sortedStudies.reverse() })
  // }, [])

  useEffect(() => {
    const filteredProducts = state.products.filter(product => {
      return state.filters.showFeatured ? product.featured : true
    })
    setState({ ...state, filteredProducts })
  }, [])

  // const matchFilters = () => {
  //   console.log("MATCHING FILTERS")
  // }


  return (
    <ShopContext.Provider value={[state, setState]}>
      {children}
    </ShopContext.Provider>
  );
}

ShopProvider.propTypes = {
  children: PropTypes.node.isRequired,
}


export { ShopContext, ShopProvider };




