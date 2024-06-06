import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { checkLocation, getGeoLocationByIp } from '../helpers'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
  Suggestion
} from 'react-places-autocomplete'
import Cookies from 'universal-cookie'
import CognitoForm from '@tylermenezes/cognitoforms-react';

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
        <div id='location-bar' className='bg-green-light fade-in p-3'>
          <div className='d-flex w-100 justify-content-center align-items-center'>
            <p className='mb-0 text-center'>
              <i className='ri-map-pin-2-fill text-primary mr-2'></i>
              Groceries incoming! We deliver to{' '}
              <button
                onClick={handleOpen}
                className='bg-transparent border-0 border-bottom'>
                your area
              </button>
            </p>
          </div>
        </div>
      )}

      {/* User checked bounds, but is out of bounds */}
      {!isInBounds && boundHasBeenChecked && (
        <div id='location-bar' className='bg-mid p-3 fade-in'>
          <div className='d-flex w-100 justify-content-center align-items-center'>
            <p className='mb-0 text-center'>
              <i className='ri-map-pin-2-fill text-warning mr-2'></i>
              Sorry! We don’t deliver to
              <button onClick={handleOpen} className='bg-transparent border-0'>
                your area
              </button>
              <br className="d-block d-md-none"/>
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
        <div id='location-bar' className='bg-mid p-3 fade-in'>
          <div className='d-flex w-100 justify-content-center align-items-center'>
            <p className='mb-0'>
              <i className='ri-map-pin-2-fill text-primary mr-2 text-center'></i>
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
            <h6 className='text-primary font-weight-bold'>Home Grocery Delivery</h6>
            {/* User is in bounds, by IP lookup */}
            {isInBounds && boundHasBeenChecked && !address && (
              <h5 className="fade-in">
                Looks like you’re in our delivery area — but please enter your
                address just to be sure
              </h5>
            )}

            {/* User is in bounds, and looked up by address */}
            {isInBounds && boundHasBeenChecked && address && (
              <h5 className="fade-in">Groceries incoming! We deliver to your area</h5>
            )}

            {/* User is out of bounds and they did an IP Lookup, ask to do a search */}
            {!isInBounds && !address && (
              <h5 className="fade-in">
                Looks like you might be outside our delivery area — but please
                enter your address just to be sure
              </h5>
            )}

            {/* User is out of bounds and they did an address search */}
            {!isInBounds && address && (
              <h5 className="fade-in">
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
                <div className='position-relative mt-3'>
                  <label htmlFor='location-search'>Address</label>
                  <input
                    {...getInputProps({
                      placeholder: 'Search Places ...',
                      className: ''
                    })}
                  />
                  <div className='autocomplete-wrapper'>
                    {loading && <div className="suggestion-item">Loading...</div>}
                    {suggestions.map((suggestion, i) => (
                      <div
                        key={i + suggestion.placeId}
                        {...getSuggestionItemProps(suggestion, {
                          className: 'suggestion-item'
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
            <p className='mt-2 mb-5 font-weight-500 text-normal'>
              4P Foods offers grocery delivery and pick-up in communities across
              DC, Virginia & Maryland.{' '}
              <a href='/posts/4p-foods-community-pickup-sites/'>
                See our pick-up sites.
              </a>{' '}
            </p>
            {/* User is outside of delivery zone, offer an email input */}
            {!isInBounds && (
              <div className="mt-3 fade-in">
                <h5>Outside our delivery zone?</h5>
                {/* <label htmlFor='email'>Email</label>
                <div className='input-group mb-3'>
                  <input
                    type='email'
                    placeholder='Enter Email Address'
                    className='form-control'
                  />
                  <div className='input-group-append'>
                    <input
                      type='submit'
                      className='btn btn-green-light text-green-dark'
                    />
                  </div>
                </div> */}
                <CognitoForm
                    formId={146}
                    accountId={`bbN8iw1MJUqjPe6aHn-_rw`}
                    css="* { 
                      .cog-wrapper {
                        display: flex;
                        align-items: center;
                      }
                      .cog-row {
                        width: 80%;
                      }

                      .cog-label {
                        margin-bottom: 0;
                      }
                      .el-input__inner {
                        margin-bottom: 0 !important;
                        border-radius: 6px 0 0 6px !important;
                      }

                      .cog-button {
                        border-radius: 6px;
                        border: 2px solid #173A21;
                        height: 48px;
                        background-color: #e7f1e2;
                        color: #255B35 !important;
                        text-align: center;
                        vertical-align: middle;
                        line-height: 1.5;
                        padding: 10px 25px;
                        font-size: 1.1rem;
                        font-weight: 600;
                        margin-top: 0 !important;
                        border-radius: 0 6px 6px 0;
                        border-left: 0;
                      }
                      .cog-page__navigation {
                        margin-bottom: -20px !important;
                        padding-top: 0 !important;
                      }
                      .cog-button--navigation {
                        margin-top: 0;
                      }
                    }"
                  />
                <p className="font-weight-500 text-normal">Add your email to know when we expand our delivery zone.</p>
                
              </div>
            )}
          </div>
          <div className='w-100'>
            <div className='text-center mt-5 py-5 border-top'>
              <h5 className='mb-4'>Wholesale Delivery &amp; Pickup</h5>
              <a
                href='/wholesale'
                className='btn btn-blue-light btn-block text-decoration-none'
              >
                Wholesale Options
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
