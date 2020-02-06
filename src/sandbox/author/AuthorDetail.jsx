import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from "react-router"
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import LoadingComponent from '../../common/ui/LoadingComponent'
import QuoteList from '../quote/QuoteList'

const AuthorDetail = () => {
  const { id } = useParams()
  useFirestoreConnect([`authors/${id}`], [id]) // sync /authors/authorId from firestore into redux
  const author = useSelector(({ firestore: { data: { authors } } }) => authors && authors[id])

  return (
    <>
      {!author ? (
        <LoadingComponent inverted={true} />
      ) : (
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>Author</h1>
                <p>
                  <strong className="mr-2">Name:</strong>{author.name}<br />
                  <strong className="mr-2">Active:</strong>{author.active}<br />
                  <strong className="mr-2">Favorite Star Wars Quote:</strong>{author.starWarsQuote}<br />
                </p>
                <div>
                  {JSON.stringify(author, null, 2)}
                </div>
                <div className="d-flex align-items-center bg-dark mt-5">
                  <strong className="text-white mx-4">Actions:</strong>
                  <Link to={`/sandbox/authors/edit/${id}`} className="btn btn-warning ml-auto">
                    <i className="ri-pencil-line"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12">
                <h4>Quotes</h4>
                <hr />
                <QuoteList author={author} />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default AuthorDetail
