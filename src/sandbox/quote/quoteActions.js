// import { push } from 'connected-react-router'
import { toastr } from 'react-redux-toastr';
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../../common/async/asyncActions'


export const addQuote = ({ firestore }, values) => {
  return async (dispatch) => {
    const { content, author } = values
    const newQuote = {
      content,
      author,
      archived: false
    }
    try {
      dispatch(asyncActionStart())
      firestore.collection('quotes').add(newQuote)
      // toastr.success('Success', 'Quote has been added')
      dispatch(asyncActionFinish())
      // dispatch(push("/sandbox/quotes")) // This is only here as an example of how to manage history object from an action creator.
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError());
      toastr.error('Oops', 'There was an issue adding to Firestore');
    }
  }
}

export const deleteQuote = ({ firestore }, quote) => {
  return async (dispatch) => {
    const message = 'Confirm: Delete quote?'
    try {
      toastr.confirm(message, {
        onOk: () => {
          dispatch(asyncActionStart())
          firestore.collection('quotes').doc(quote.id).delete()
          toastr.success('Success', 'Quote has been removed')
          dispatch(asyncActionFinish())
        }
      })
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError());
      toastr.error('Oops', 'This quote won\'t go away')
    }
  }
}

export const archiveQuoteToggle = ({ firestore }, quote) => {

  return async (dispatch) => {
    try {

      dispatch(asyncActionStart())
      firestore.update(`quotes/${quote.id}`, {
        archived: !quote.archived
      })
      dispatch(asyncActionFinish())
      toastr.success('Success', 'Quote status has been updated');

    } catch (error) {
      console.log(error);
      dispatch(asyncActionError());
      toastr.error('Oops', 'We were not able to update the quote status');
    }
  }
}