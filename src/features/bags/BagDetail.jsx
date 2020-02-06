import React from 'react'
import PropTypes from 'prop-types'
import BagCard from './BagCard'

const BagDetails = ({bag}) => {
  return (
    <div>
      <h1>Detail veiw of the bags</h1>
      <BagCard bag={bag} />
    </div>
  )
}

BagDetails.propTypes = {
  bag: PropTypes.instanceOf(Object)
}

export default BagDetails
