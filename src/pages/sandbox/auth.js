import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useFirebase, isLoaded, isEmpty } from 'react-redux-firebase'
import LoadingComponent from '../../common/ui/LoadingComponent'
import { openModal } from '../../features/modal/modalActions'

function AuthPage() {
  const firebase = useFirebase()
  const dispatch = useDispatch()
  // const firestore = useFirestore()
  const auth = useSelector(state => state.firebase.auth)
  // const profile = useSelector(state => state.firestore.profile)


  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>FIrestore: Profile</h2>
            <div>{JSON.stringify(profile, null, 2)}</div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12">
            <h2>Firebase: Auth</h2>
            {!isLoaded(auth) ? (
              <LoadingComponent inverted />
            ) : (isEmpty(auth) ? (
              <>
                <h3>You are not signed in</h3>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => dispatch(openModal('LoginModal'))}
                >Login
                </button>
              </>
            ) : (
                <>
                  <p>Congrats! You are in</p>
                  <div className="mb-5">
                    <button className="btn btn-warning" type="button" onClick={() => firebase.auth().signOut()}>Sign-out</button>
                  </div>

                  {JSON.stringify(auth, null, 2)}

                </>
              )
              )
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default AuthPage