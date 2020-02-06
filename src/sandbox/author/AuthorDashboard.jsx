import React from 'react'
import {Link} from 'react-router-dom'
import AuthorList from './AuthorList'

const AuthorDashboard = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <AuthorList />
            <hr/>
            <Link
              className="btn btn-outline-primary"
              to={{
                pathname: "/courses",
                search: "?sort=name",
                hash: "#the-hash",
                state: { fromDashboard: true }
              }}
            >Add New Author</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AuthorDashboard

