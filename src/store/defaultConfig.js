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
  userProfile: 'profiles', // root that user profiles are written to
  updateProfileOnLogin: true, // enable/disable updating of profile on login
  // presence: 'presence', // list currently online users under "presence" path in RTDB
  sessions: null, // Skip storing of sessions
  useFirestoreForProfile: true, // Save profile to Firestore instead of Real Time Database
  useFirestoreForStorageMeta: true, // Metadata associated with storage file uploads goes to Firestore
  profileFactory: (userData, profileData, firebase) => { // how profiles are stored in database
    const { phoneNumber, metadata: { lastSignInTime, creationTime } } = userData

    return {
      ...profileData,
      createdAt: creationTime,
      lastLoginAt: lastSignInTime,
      phoneNumber,
      dietaryRestrictions: '',
      shoppingCart: {
        cartPrice: 0.00,
        items: []
      }
    }
  },
  onAuthStateChanged: (auth, firebaseInstance, dispatch) => {
    if (auth) {
      // Set auth within error handler
      // setErrorUser(auth)
      // Initalize messaging with dispatch
      // initializeMessaging(dispatch)
      // Set auth within analytics
      setAnalyticsUser(auth)
    }
  }
}
