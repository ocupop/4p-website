import React from 'react'
import BagList from '../features/bags/BagList'
import { BAG_DATA } from '../common/data/BAG_DATA'
//import PropTypes from 'prop-types'

const bags = () => {
  return (
    <>
      <BagList bags={BAG_DATA} />
    </>
  )
}

bags.propTypes = {

}

export default bags
