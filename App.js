/* eslint-disable react/prop-types */
import React from 'react'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/performance'
import ReduxToastr from 'react-redux-toastr'
import createStore from './src/store/createStore'
import { defaultRRFConfig } from './src/store/defaultConfig'
import * as config from './src/config'
import Layout from './src/containers/Layout'


// Initialize Firebase instance
firebase.initializeApp(config.firebase)


const App = ({ element }) => {
  const store = createStore()

  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider
        firebase={firebase}
        config={defaultRRFConfig}
        dispatch={store.dispatch}
        createFirestoreInstance={createFirestoreInstance}>

        <ReduxToastr
          position='bottom-right'
          transitionIn='fadeIn'
          transitionOut='fadeOut'
        />
        <Layout>
          {element}
        </Layout>
      </ReactReduxFirebaseProvider>
    </Provider>
  )
}

export default App

