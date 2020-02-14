import React from 'react'
import UserProfile from '../../features/user/UserProfile'
import UserAddress from '../../features/user/UserAddress'
import UserDeliverySchedule from '../../features/user/UserDeliverySchedule'

const user = () => {
  return (
    <>
     <UserProfile/>
     <UserAddress/>
     <UserDeliverySchedule/>
    </>
  )
}

export default user
