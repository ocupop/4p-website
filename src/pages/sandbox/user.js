import React from 'react'
import UserProfile from '../../features/user/UserProfile'
import UserAddress from '../../features/user/UserAddress'
import UserDeliverySchedule from '../../features/user/UserDeliverySchedule'
import Sandbox from '../../containers/Sandbox'

const user = () => {
  return (
    <Sandbox>
      <UserProfile />
      <UserAddress />
      <UserDeliverySchedule />
    </Sandbox>
  )
}

export default user
