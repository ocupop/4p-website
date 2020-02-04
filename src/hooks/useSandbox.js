import React, { useState } from 'react'
import {
  useFirestore,
  useFirestoreConnect,
  isLoaded,
  isEmpty
} from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import { toastr } from 'react-redux-toastr';
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../common/async/asyncActions'


function useSandbox() {
  const firestore = useFirestore()

  // Get sandbox from redux state
  const sandbox = useSelector(state => state.firestore.ordered.sandbox)

  function testForm(newInstance) {

    return async (dispatch) => {
      try {
        dispatch(asyncActionStart())
        firestore.add('sandbox', {
          ...newInstance,
          createdAt: firestore.FieldValue.serverTimestamp()
        })
        toastr.success('Success', 'The Firestore sandbox collection has been modified')
        dispatch(asyncActionFinish())
      } catch (error) {
        console.error('Error:', error) // eslint-disable-line no-console
        dispatch(asyncActionError());
        toastr.error('Oops', 'There was an issue adding to Firestore');
      }
    }
  }

  return { sandbox, testForm }
}