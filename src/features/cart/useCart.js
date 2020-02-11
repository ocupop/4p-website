import React, { useState } from 'react'
import {
  useFirestore,
  useFirestoreConnect,
  isLoaded,
  isEmpty,
} from 'react-redux-firebase'
import { useDispatch, useSelector } from 'react-redux'
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError,
} from '../../common/async/asyncActions'

function useCart({ author }) {
  const dispatch = useDispatch();
  const [items, addItem] = useState([])
  const firestore = useFirestore()
  const MOCK_USER_ID = 'Im0BHSNZ9Q7PrPSXacIF'



  useFirestoreConnect([
    {
      collection: 'users',
      doc: MOCK_USER_ID
    },
  ])

   const user = useSelector(state => state.firestore.data.users)
  

   console.log(user);

  function addToCart(item) {
    console.log(`Called the hook, adding item:`, item)
    try {
      dispatch(asyncActionStart());

      user.update({name:'Cody1'})
      // - First we need to check if this item (based on variantId) already exists within the cart
      //  if it does we just need to update the quantity count
      
      // - Next if it doesn't already exist within the cart, we need to update the users shopping cart
      // with the newly added item

      // firestore.collection('users').doc(MOCK_USER_ID).update({
      //   shoppingCart: {
      //     cartItems: [
      //       item
      //     ]
      //   }
      // })



            // firestore.collection('quotes').doc(quote.id).delete()
      // firestore.add('users', {
      //   ...{foo: 'bar'},
      //   archived: false,
      //   createdAt: firestore.FieldValue.serverTimestamp()
      // }).doc(MOCK_USER_ID)

      // user.update({name: 'Cody2'})

      // db.collection('spells').doc(spell.id).set({...spell, name})
      // firestore.collection('users').doc(MOCK_USER_ID).set({...user, item})



      dispatch(asyncActionFinish());
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError());
    }


    // addToCart(item);
    //return async dispatch => {
      // try {
      //   console.log('@DEBUG::02052020-063717')
      //   dispatch(asyncActionStart())
      //   console.log(dispatch)
      // } catch (err) {
      //   console.log(err)
      // }
    //}

  }

  return { items, addToCart }
}

export default useCart
