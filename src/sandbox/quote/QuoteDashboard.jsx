import React from 'react'
import QuoteList from './QuoteList'
import QuoteForm from './QuoteForm'

const QuoteDashboard = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <QuoteList />
            <hr/>
            <QuoteForm/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuoteDashboard

