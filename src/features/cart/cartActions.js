import { toastr } from 'react-redux-toastr'
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../../common/async/asyncActions'

export const addToCart = ({ firestore }, userId, updatedShoppingCart) => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart())
      firestore.update(`profiles/${userId}`, { shoppingCart: updatedShoppingCart })
      toastr.success('Success', 'Product has been added')
      dispatch(asyncActionFinish())
    } catch (error) {
      console.log(error)
      dispatch(asyncActionError())
      toastr.error('Oops', 'There was an issue adding to Firestore')
    }
  }
}

// useFirestoreConnect([`products/${id}`], [id]) // sync /products/:id from firestore into redux
// const product = useSelector(({ firestore: { data: { products } } }) => products && products[id])

// addToCart
// removeFromCart
// updateCartItem
