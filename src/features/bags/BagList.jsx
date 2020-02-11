import React from 'react'
import PropTypes from 'prop-types'
import BagCard from './BagCard';

const BagList = ({bags}) => {
  return (
    <>
      <div className="row no-gutters">
        {bags && bags.map(bag => (
          <div className="col-lg-6">
            <div className="content">
              <BagCard key={bag.id} bag={bag} />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
BagList.propTypes = {
  bags: PropTypes.instanceOf(Array)
}

export default BagList
