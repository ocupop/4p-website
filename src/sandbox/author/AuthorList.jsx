import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import AuthorListItem from './AuthorListItem'

const AuthorList = ({ firestore }) => {
  useFirestoreConnect('authors')
  const authors = useSelector(state => state.firestore.ordered.authors)

  return (
    <>
      <ul className="list-group-item">
        {authors && authors.map(author => <AuthorListItem key={author.id} author={author} />)}
      </ul>
      <div>
        {JSON.stringify(authors, null, 2)}
      </div>
    </>
  )
}

export default AuthorList
