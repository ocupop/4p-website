import React from 'react'
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import LoadingComponent from '../../common/ui/LoadingComponent'
import SignedInMenu from './SignedInMenu'
import SignedOutMenu from './SignedOutMenu'

const AuthNav = () => {
  const auth = useSelector(state => state.firebase.auth)

  return (
    <>
      {!isLoaded(auth) ? (
        <LoadingComponent />
      ) : (
        isEmpty(auth)
        ? <SignedOutMenu/>
        : <SignedInMenu auth={auth} />
      )}
    </>
  )
}

export default AuthNav
