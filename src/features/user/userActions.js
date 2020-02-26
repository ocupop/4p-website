// import { push } from 'connected-react-router'
import { toastr } from 'react-redux-toastr'
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../../common/async/asyncActions'

export const updateProfile = ({ firestore }, values, profileID) => {
  return async dispatch => {
    // const updatedProfile = {
    //   ...values
    // Make any automatic updates here...
    // }
    try {
      dispatch(asyncActionStart())

      firestore.update(`/profiles/${profileID}`, values)

      toastr.success('Success', 'Profile details have been updated')
      dispatch(asyncActionFinish())

      // dispatch(push(`/profile`)) // Pushing to profile view
    } catch (error) {
      console.log(error)
      dispatch(asyncActionError())
      toastr.error('Oops', 'There was an issue updating your profile. Please try again.')
    }
  }
}
