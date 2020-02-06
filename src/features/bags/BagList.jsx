import React from 'react'
import PropTypes from 'prop-types'
import BagCard from './BagCard';

const BagList = ({bags}) => {
  return (
    <>
      <h1>A List of all the bags</h1>
      {bags && bags.map(bag => (
        <BagCard key={bag.id} bag={bag} />
      ))}
    </>
  )
}
BagList.propTypes = {
  bags: PropTypes.instanceOf(Array)
}

export default BagList
