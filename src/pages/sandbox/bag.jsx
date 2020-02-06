/* eslint-disable react/prop-types */
import React from 'react'
import BagDetail from '../../features/bags/BagDetail'
import { BAG_DATA } from '../../common/data/BAG_DATA'

const AutomatedBag = () => {
  const bag = BAG_DATA[0];
  return (
    <BagDetail bag={bag} />
  )
}

export default AutomatedBag
