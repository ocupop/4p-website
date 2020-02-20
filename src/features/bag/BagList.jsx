import React from 'react'
import PropTypes from 'prop-types'
import BagCard from './BagCard';

const BagList = ({bags}) => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="content">
            <div className="responsive-card-deck cards-lg-2">
              {bags && bags.map(bag => (
                <BagCard key={bag.id} bag={bag} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
BagList.propTypes = {
  bags: PropTypes.instanceOf(Array)
}

export default BagList
