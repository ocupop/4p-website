import React from 'react'
import { useFirestoreConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import QuoteListItem from './QuoteListItem'

const QuoteList = ({author}) => {
  useFirestoreConnect('quotes')
  const quotes = useSelector(state => state.firestore.ordered.quotes)

  return (
    <>
      <ul className="list-group-item">
        {quotes && quotes.map(quote => <QuoteListItem key={quote.id} quote={quote} />)}
        {/* {quotes && author ? (
          quotes
            .filter(quote => quote.author.value !== author.id)
            .map(quote => <QuoteListItem key={quote.id} quote={quote} />)
        ) : (
          quotes.map(quote => <QuoteListItem key={quote.id} quote={quote} />)
        )} */}
      </ul>
      <div>
        {JSON.stringify(quotes, null, 2)}
      </div>
    </>
  )
}

export default QuoteList
