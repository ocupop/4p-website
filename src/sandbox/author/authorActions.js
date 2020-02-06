import { push } from 'connected-react-router'
import { toastr } from 'react-redux-toastr';
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../../common/async/asyncActions'


export const addAuthor = ({ firestore }, values) => {
  return async (dispatch) => {
    const newAuthor = values
    try {
      dispatch(asyncActionStart())
      firestore.collection('authors').add(newAuthor)
      // toastr.success('Success', 'Quote has been added')
      dispatch(asyncActionFinish())
      dispatch(push("/sandbox/quotes")) // This is only here as an example of how to manage history object from an action creator.
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError());
      toastr.error('Oops', 'There was an issue adding to Firestore');
    }
  }
}

export const activeAuthorToggle = ({ firestore }, author) => {

  return async (dispatch) => {
    try {

      dispatch(asyncActionStart())
      firestore.update(`authors/${author.id}`, {
        active: !author.active
      })
      dispatch(asyncActionFinish())
      toastr.success('Success', 'Author status has been updated');

    } catch (error) {
      console.log(error);
      dispatch(asyncActionError());
      toastr.error('Oops', 'We were not able to update the author\'s status');
    }
  }
}