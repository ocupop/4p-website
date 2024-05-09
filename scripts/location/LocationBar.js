import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { checkLocation, getGeoLocationByIp } from '../helpers'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
  Suggestion
} from 'react-places-autocomplete'
import Cookies from 'universal-cookie'

const LocationBar = ({ title }) => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [isInBounds, setIsInBounds] = useState(null)
  const [boundHasBeenChecked, setBoundHasBeenChecked] = useState(false)
  const [address, setAddress] = useState()

  const cookies = new Cookies()

  useEffect(() => {
    const asyncInit = async () => {
      // check if we have a cookie, if we do, get the address
      const cookieAddress = cookies.get('address')
      if (cookieAddress) {
        performAddressLookup(cookieAddress)
      } else {
        // if not, do an IP lookup
        const ipLocation = await getGeoLocationByIp()
        if (ipLocation) {
          setIsInBounds(checkLocation(ipLocation))
          setBoundHasBeenChecked(true)
        }
      }
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
    performAddressLookup(value)
  }

  const performAddressLookup = async (value) => {
    setAddress(value)
    const result = await geocodeByAddress(value)
    const latLng = await getLatLng(result[0])
    setIsInBounds(checkLocation([latLng.lat, latLng.lng]))
    setBoundHasBeenChecked(true)
    cookies.set('address', value, { path: '/' })
  }

  return (
    <>
      {/* User is in Bounds */}
      {isInBounds && boundHasBeenChecked && (
        <div id='location-bar' className='bg-green-light p-3'>
          <div className='d-flex w-100 justify-content-center align-items-center'>
            <p className='mb-0'>
              <i class='ri-map-pin-2-fill text-primary mr-2'></i>
              Groceries incoming! We deliver to{' '}
              <button
                onClick={handleOpen}
                className='bg-transparent border-0 border-bottom'
              >
                your area
              </button>
            </p>
          </div>
        </div>
      )}

      {/* User checked bounds, but is out of bounds */}
      {!isInBounds && boundHasBeenChecked && (
        <div id='location-bar' className='bg-mid p-3'>
          <div className='d-flex w-100 justify-content-center align-items-center'>
            <p className='mb-0'>
              <i class='ri-map-pin-2-fill text-warning mr-2'></i>
              Sorry! We don’t deliver to
              <button onClick={handleOpen} className='bg-transparent border-0'>
                your area
              </button>
              learn more about our{' '}
              <a href='/posts/4p-foods-community-pickup-sites/'>
                pick up options
              </a>
              .
            </p>
          </div>
        </div>
      )}

      {/* User declined IP lookup (default banner state) */}
      {!isInBounds && !boundHasBeenChecked && (
        <div id='location-bar' className='bg-mid p-3'>
          <div className='d-flex w-100 justify-content-center align-items-center'>
            <p className='mb-0'>
              <i class='ri-map-pin-2-fill text-primary mr-2'></i>
              Check for grocery delivery in{' '}
              <button onClick={handleOpen} className='bg-transparent border-0'>
                your area
              </button>
            </p>
          </div>
        </div>
      )}

      <div
        id='location-drawer'
        className={`bg-light p-4 p-lg-5 shadow ${drawerOpen ? 'open' : ''}`}
      >
        <button
          onClick={handleOpen}
          className='bg-transparent border-0 close-drawer'
        >
          <i className='ri-close-circle-line'></i>
        </button>
        <div className='d-flex flex-column h-100 justify-content-between align-items-center'>
          <div>
            <h6 class='text-primary font-weight-bold'>Home Grocery Delivery</h6>
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
                Looks like you might be outside our delivery area — but please
                enter your address just to be sure
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
                <div className='relative mt-3 mt-lg-5'>
                  <label htmlFor='location-search'>Address</label>
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
            <p class='my-5'>
              4P Foods offers grocery delivery and pick-up in communities across
              DC, Virginia & Maryland.{' '}
              <a href='/posts/4p-foods-community-pickup-sites/'>
                See our pick-up sites.
              </a>{' '}
            </p>
            {/* User is outside of delivery zone, offer an email input */}
            {!isInBounds && (
              <div className='mt-3'>
                <h5>Outside our delivery zone?</h5>
                <label htmlFor='email'>Email</label>
                <div class='input-group mb-3'>
                  <input
                    type='email'
                    placeholder='Enter Email Address'
                    className='form-control'
                  />
                  <div class='input-group-append'>
                    <input
                      type='submit'
                      className='btn btn-green-light text-green-dark'
                    />
                  </div>
                </div>
                <p>Add your email to know when we expand our delivery zone.</p>
              </div>
            )}
          </div>
          <div className='w-100'>
            <div className='text-center mt-5 py-5 border-top'>
              <h5 class='mb-4'>Wholesale Delivery &amp; pickup</h5>
              <a
                href='/wholesale'
                className='btn btn-blue-light btn-block text-decoration-none'
              >
                Explore Wholesale Options
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

LocationBar.propTypes = {
  title: PropTypes.string
}

export default LocationBar
