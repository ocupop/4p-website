import React from 'react'
import { useFirestore } from 'react-redux-firebase'
import { useDispatch } from 'react-redux'
import { Checkbox } from "semantic-ui-react";
import { archiveQuoteToggle, deleteQuote } from './quoteActions'

const QuoteListItem = ({ quote }) => {
  const firestore = useFirestore()
  const dispatch = useDispatch()
  return (
    <li className="list-group-item d-flex align-items-center">
      <Checkbox
        type="checkbox"
        toggle
        checked={quote.archived}
        onChange={() => dispatch(archiveQuoteToggle({ firestore }, quote))}
        className="mr-4"
      />
      <strong>
        {quote.content}
      </strong>
      {quote.author.label && (
        <span className="ml-3">
          - {quote.author.label}
        </span>
      )}
      <button
        type="button"
        onClick={() => dispatch(deleteQuote({ firestore }, quote))}
        className="btn btn-danger ml-auto">
        <i className="ri-delete-bin-line"/>
      </button>
    </li>
  )
}

export default QuoteListItem
