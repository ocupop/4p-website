import { useContext } from 'react'

const useFilter = (context) => {
  const [state, setState] = useContext(context)


  function matchFilters() {
    console.log("MATCHING")
    setState(state => ({ ...state, isFiltered: !state.isFiltered }))
  }


  return {
    matchFilters,
    isFiltered: state.isFiltered,
  }
}

export default useFilter