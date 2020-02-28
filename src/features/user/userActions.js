// import { push } from 'connected-react-router'
import { toastr } from 'react-redux-toastr'
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../../common/async/asyncActions'

export const updateProfile = ({ firebase }, values) => {
  return async dispatch => {
    // const updatedProfile = {
    //   ...values
    // Make any automatic updates here...
    // }
    try {
      dispatch(asyncActionStart())

      // Update the cart in Firebase using react-redux-firebase "Update Profile" method
      // https://react-redux-firebase.com/docs/recipes/profile.html#update-profile
      firebase.updateProfile(values)

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
