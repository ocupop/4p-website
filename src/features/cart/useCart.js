import React, { useState } from 'react'
import {
  useFirestore,
  useFirestoreConnect,
  isLoaded,
  isEmpty
} from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import { addToCart, removeFromCart } from './cartActions'
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../../common/async/asyncActions'

const [items, addItem] = useState([]);

function useCart({ author }) {
  const firestore = useFirestore()

  useFirestoreConnect([
    {
      collection: 'cart',
      where: ['author.value', '==', author.id]
    }
  ])

  function addItemToBag(item, bag) {
    // addToCart(item);
  }

  function removeFromBag(item, bag) {
    // removeFromCart(item);
  }

  return { items, addItemToBag, removeFromBag }
}

export default useCart;