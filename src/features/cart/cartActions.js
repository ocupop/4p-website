import { toastr } from 'react-redux-toastr'
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../../common/async/asyncActions'

export const addToCart = ({ firestore }, userId, newProductVariant, type) => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart())
      firestore.collection(`profiles/${userId}/shoppingCart`).add({ foo: 'bar' })
      console.log('... adding to cart')
      console.log(firestore.collection(`profiles/${userId}/shoppingCart`).doc())
      toastr.success('Success', 'Product has been added')
      dispatch(asyncActionFinish())
      // dispatch(push("/products")) // This is only here as an example of how to manage history object from an action creator.
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
