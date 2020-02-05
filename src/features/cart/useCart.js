import React, { useState } from 'react'
import {
  useFirestore,
  useFirestoreConnect,
  isLoaded,
  isEmpty
} from 'react-redux-firebase'
// import { useSelector } from 'react-redux'
// import { asyncActionStart, asyncActionFinish, asyncActionError } from '../../common/async/asyncActions'


function useCart({ author }) {
  const [items, addItem] = useState([]);
  const firestore = useFirestore()

  useFirestoreConnect([
    {
      collection: 'cart',
      where: ['author.value', '==', author.id]
    }
  ])


  function addToCart(item, bagType) {
    console.log(`Called the hook, adding to bag ${bagType}, item:`, item)
    // addToCart(item);
  }

  

  return {items, addToCart }
}

export default useCart;