// import React, { useState } from 'react'
import {
  useFirestore,
  useFirestoreConnect,
  // isLoaded,
  // isEmpty
} from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import { toastr } from 'react-redux-toastr';
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../../common/async/asyncActions'


export function useQuotes({ author }) {
  const firestore = useFirestore()

  useFirestoreConnect([
    {
      collection: 'quotes',
      where: ['author.value', '==', author.id]
    }
  ])

  // Get projects from redux state
  const quotes = useSelector(state => state.firestore.ordered.quotes)

  function addQuote(newInstance) {

    return async (dispatch) => {
      try {
        dispatch(asyncActionStart())
        firestore.add('quotes', {
          ...newInstance,
          archived: false,
          createdAt: firestore.FieldValue.serverTimestamp()
        })
        // toastr.success('Success', 'Quote has been added')
        dispatch(asyncActionFinish())
        // dispatch(push("/sandbox/quotes")) // This is only here as an example of how to manage history object from an action creator.
      } catch (error) {
        console.error('Error:', error) // eslint-disable-line no-console
        dispatch(asyncActionError());
        toastr.error('Oops', 'There was an issue adding to Firestore');
      }
    }
  }

  return { quotes, addQuote }
}