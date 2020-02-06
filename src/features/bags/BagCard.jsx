import React from 'react'
import PropTypes from 'prop-types'

const BagCard = ({bag}) => {
  return (
    <div>
      <h4>[Bag Card]</h4>{bag.name}
    </div>
  )
}

BagCard.propTypes = {
  bag: PropTypes.instanceOf(Object)
}

export default BagCard
