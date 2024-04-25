import React, { useState } from 'react'
import PropTypes from 'prop-types'

const LocationBar = ({ title }) => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const handleOpen = () => {
    setDrawerOpen(!drawerOpen)
    console.log('open', drawerOpen)
  }
  return (
    <>
      <div id="location-bar" className="bg-mid py-3">
        <div className="d-flex w-100 justify-content-center align-items-center">
          <p className="mb-0">Check for grocery delivery in <button onClick={handleOpen} className="bg-transparent border-0 border-bottom"><strong>your area</strong></button></p>
        </div>
      </div>
      {/* TODO not sure if this needs to be it's own file / component? not sure how to handle passing state between the two for open / closed */}
      <div id="location-drawer" className={`bg-mid text-center p-5 ${drawerOpen ? 'open' : ''}`}>
        <button onClick={handleOpen} className="bg-transparent border-0 close-drawer"><i className="ri-close-circle-line"></i></button>
        <p className="mb-0">This is the location drawer</p>
      </div>
    </>
    
  )
}

LocationBar.propTypes = {
  title: PropTypes.string
}

export default LocationBar
