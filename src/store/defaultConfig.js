/* eslint-disable no-unused-vars */
// import { initializeMessaging } from '../common/utils/firebaseMessaging'
import { setAnalyticsUser } from '../common/utils/analytics'
// import { setErrorUser } from '../common/utils/errorHandler'

// ======================================================
// Default Redux + Firebase Config used for all environments
// (for react-redux-firebase & redux-firestore)
// Note: Differs from src/config.js which is environment specific config
// ======================================================
export const defaultRRFConfig = {
  userProfile: 'users', // root that user profiles are written to
  updateProfileOnLogin: true, // enable/disable updating of profile on login
  // presence: 'presence', // list currently online users under "presence" path in RTDB
  sessions: null, // Skip storing of sessions
  useFirestoreForProfile: true, // Save profile to Firestore instead of Real Time Database
  useFirestoreForStorageMeta: true, // Metadata associated with storage file uploads goes to Firestore
  // profileFactory: (userData, profileData, firestore) => { // how profiles are stored in database
  //   const { user } = userData
  //   return {
  //     email: user.email
  //   }
  // },
  onAuthStateChanged: (auth, firebaseInstance, dispatch) => {
    if (auth) {
      // const { currentUser } = firebaseInstance.auth()
      // console.log("CURRENT:", currentUser.displayName)
      // Set auth within error handler
      // setErrorUser(auth)
      // Initalize messaging with dispatch
      // initializeMessaging(dispatch)
      // Set auth within analytics
      setAnalyticsUser(auth)
    }
  }
}
