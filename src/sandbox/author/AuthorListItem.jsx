import React from 'react'
import { Link } from 'react-router-dom'
import { useFirestore } from 'react-redux-firebase'
import { useDispatch } from 'react-redux'
import { Checkbox } from "semantic-ui-react";
import { activeAuthorToggle } from './authorActions'


const AuthorListItem = ({ author }) => {
  const firestore = useFirestore()
  const dispatch = useDispatch()
  return (
    <li className="list-group-item d-flex align-items-center">
      <Checkbox
        type="checkbox"
        toggle
        checked={author.active}
        onChange={() => dispatch(activeAuthorToggle({ firestore }, author))}
        className="mr-4"
      />
      <strong>
        {author.name}
      </strong>
      <Link to={`/sandbox/authors/${author.id}`} className="btn btn-white text-primary ml-auto">
        <i className="ri-eye-line"></i>
      </Link>
    </li>
  )
}

export default AuthorListItem
