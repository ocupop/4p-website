import React, { useState, useEffect } from 'react';
import axios from 'axios'

const SiteContext = React.createContext()

const SiteProvider = ({ children }) => {
  // const [state, setState] = useState(initialState)
  const [allFarmers, setAllFarmers] = useState(false)
  const state = {
    allFarmers
  }

  return (
    <SiteContext.Provider value={{
      allFarmers: allFarmers,
    }}>
      {children}
    </SiteContext.Provider>
  )
}

export { SiteContext, SiteProvider }