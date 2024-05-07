import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { checkLocation, getGeoLocationByIp } from '../helpers'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
  Suggestion
} from 'react-places-autocomplete'

const LocationBar = ({ title }) => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [isInBounds, setIsInBounds] = useState(null)
  const [boundHasBeenChecked, setBoundHasBeenChecked] = useState(false)
  const [address, setAddress] = useState()

  useEffect(() => {
    const asyncInit = async () => {
      const ipLocation = await getGeoLocationByIp()
      if (ipLocation) {
        setIsInBounds(checkLocation(ipLocation))
        setBoundHasBeenChecked(true)
      }
      console.log(isInBounds)
    }
    asyncInit()
  }, [])

  const handleOpen = () => {
    setDrawerOpen(!drawerOpen)
  }

  const handleChange = (value) => {
    setAddress(value)
  }

  const handleSelect = async (value) => {
    setAddress(value)
    const result = await geocodeByAddress(value)
    const latLng = await getLatLng(result[0])
    setIsInBounds(checkLocation([latLng.lat, latLng.lng]))
    setBoundHasBeenChecked(true)
  }

  return (
    <>
      {/* User is in Bounds */}
      {isInBounds && boundHasBeenChecked && (
        <div id='location-bar' className='bg-mid py-3'>
          <div className='d-flex w-100 justify-content-center align-items-center'>
            <p className='mb-0'>
              Groceries incoming! We deliver to{' '}
              <button
                onClick={handleOpen}
                className='bg-transparent border-0 border-bottom'
              >
                <strong>your area</strong>
              </button>
            </p>
          </div>
        </div>
      )}

      {/* User checked bounds, but is out of bounds */}
      {!isInBounds && boundHasBeenChecked && (
        <div id='location-bar' className='bg-mid py-3'>
          <div className='d-flex w-100 justify-content-center align-items-center'>
            <p className='mb-0'>
              Sorry! We don’t deliver to{' '}
              <button
                onClick={handleOpen}
                className='bg-transparent border-0 border-bottom'
              >
                <strong>your area</strong>
              </button>
              learn more about our <a href='#'>pick up options</a>.
            </p>
          </div>
        </div>
      )}

      {/* User declined IP lookup (default banner state) */}
      {!isInBounds && !boundHasBeenChecked && (
        <div id='location-bar' className='bg-mid py-3'>
          <div className='d-flex w-100 justify-content-center align-items-center'>
            <p className='mb-0'>
              Check for grocery delivery in{' '}
              <button
                onClick={handleOpen}
                className='bg-transparent border-0 border-bottom'
              >
                <strong>your area</strong>
              </button>
            </p>
          </div>
        </div>
      )}

      <div
        id='location-drawer'
        className={`bg-mid text-center p-5 ${drawerOpen ? 'open' : ''}`}
      >
        <button
          onClick={handleOpen}
          className='bg-transparent border-0 close-drawer'
        >
          <i className='ri-close-circle-line'></i>
        </button>

        {/* User is in bounds, by IP lookup */}
        {isInBounds && boundHasBeenChecked && !address && (
          <h5>
            Looks like you’re in our delivery area — but please enter your
            address just to be sure
          </h5>
        )}

        {/* User is in bounds, and looked up by address */}
        {isInBounds && boundHasBeenChecked && address && (
          <h5>Groceries incoming! We deliver to your area</h5>
        )}

        {/* User is out of bounds and they did an IP Lookup, ask to do a search */}
        {!isInBounds && !address && (
          <h5>
            Looks like you might be outside our delivery area — but please enter
            your address just to be sure
          </h5>
        )}

        {/* User is out of bounds and they did an address search */}
        {!isInBounds && address && (
          <h5>
            Sorry! We don’t deliver to your area - learn more about our{' '}
            <a href=''>pick up options.</a>
          </h5>
        )}

        {/* 
            To Test: 
              Samuel Miller District, VA, USA
              38.056160, -78.581087
        */}
        <PlacesAutocomplete
          value={address}
          searchOptions={{ componentRestrictions: { country: ['us'] } }} // region lock to US
          onChange={handleChange}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading
          }) => (
            <div className='relative'>
              <input
                {...getInputProps({
                  placeholder: 'Search Places ...',
                  className: ''
                })}
              />
              <div className=''>
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion, i) => (
                  <div
                    key={i + suggestion.placeId}
                    {...getSuggestionItemProps(suggestion, {
                      className: ''
                    })}
                  >
                    <span key={suggestion.placeId}>
                      {suggestion.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
        {/* User is outside of delivery zone, offer an email input */}
        {!isInBounds && (
          <div className='mt-3'>
            <h5>Outside our delivery zone?</h5>
            <input
              type='email'
              placeholder='Enter your email to be notified when we deliver to your area'
              className='form-control'
            />
          </div>
        )}
      </div>
    </>
  )
}

LocationBar.propTypes = {
  title: PropTypes.string
}

export default LocationBar
