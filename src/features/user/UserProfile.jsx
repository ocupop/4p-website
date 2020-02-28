import React from 'react'
// import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import { formatDate } from '../../common/utils/helpers'
import logo from '../../common/assets/logo-vertical.svg'
import UserProfileForm from './forms/UserProfileForm'

const UserProfile = () => {
  const profile = useSelector(state => state.firebase.profile)
  const profileComplete = false

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-8">
              <h1>Profile</h1>
              <hr />
              {!profileComplete && (
                <>
                  <div className="alert alert-warning alert-dismissible fade show">
                    <strong>Your profile is not complete.</strong> Please fill in all details to help us better serve
                    you.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <UserProfileForm profile={profile} />
                </>
              )}
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div className="bg-light p-4">
                {!isEmpty(profile) && (
                  <>
                    <dl>
                      <dt>First Name:</dt>
                      <dd>{profile.firstName || `incomplete`}</dd>
                      <dt>Last Name:</dt>
                      <dd>{profile.lastName || `incomplete`}</dd>
                      <dt>Display Name:</dt>
                      <dd>{profile.displayName || `incomplete`}</dd>
                      <dt>Email:</dt>
                      <dd>{profile.email || `incomplete`}</dd>
                      <dt>Phone:</dt>
                      <dd>{profile.phoneNumber || `incomplete`}</dd>
                      <dt>Dietary Restrictions:</dt>
                      <dd>{profile.dietaryRestrictions || `N/A`}</dd>
                      <dt>Created:</dt>
                      <dd>{formatDate(profile.createdAt.seconds)}</dd>
                      <dt>Last Login:</dt>
                      <dd>{formatDate(profile.lastLoginAt.seconds)}</dd>
                      <dt>Avatar:</dt>
                      <dd>
                        <img src={profile.avatarUrl || logo} alt={profile.displayName} className="img-fluid" />
                      </dd>
                    </dl>
                    {/* <div className="overflow-hidden">{JSON.stringify(profile, null, 2)}</div> */}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

UserProfile.propTypes = {}

export default UserProfile
