import React, { useState } from 'react'
import {
  useFirestore,
  useFirestoreConnect,
  isLoaded,
  isEmpty
} from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../../common/async/asyncActions'

const [items, addItem] = useState([]);

function useCart({ author }) {
  // const firestore = useFirestore()

  // useFirestoreConnect([
  //   {
  //     collection: 'quotes',
  //     where: ['author.value', '==', author.id]
  //   }
  // ])

  function addToCart(item) {

  }

  function removeFromCart(item) {

  }

  return { items, addToCart, removeFromCart }
}

export default useCart;