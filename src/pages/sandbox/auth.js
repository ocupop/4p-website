import React from 'react'
import { useSelector } from 'react-redux'
import { useFirebase, isLoaded, isEmpty } from 'react-redux-firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
// import { useHistory } from 'react-router-dom'; // if you use react-router
// import GoogleButton from 'react-google-button' // optional
import LoadingComponent from '../../common/ui/LoadingComponent'

function AuthPage() {
  const firebase = useFirebase()
  const auth = useSelector(state => state.firebase.auth)

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <StyledFirebaseAuth
              uiConfig={{
                signInFlow: 'popup',
                signInSuccessUrl: '/sandbox/auth',
                signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
                callbacks: {
                  signInSuccessWithAuthResult: (authResult) => {
                    // @TODO: Refactor our auth component to use the result details
                    console.log(authResult)

                    firebase.handleRedirectResult(authResult).then(() => {
                      // history.push(redirectUrl); if you use react router to redirect
                    });
                    return false;
                  },
                },
              }}
              firebaseAuth={firebase.auth()}
            />

            <h2>Auth Details</h2>
            {!isLoaded(auth) ? (
              <LoadingComponent inverted />
            ) : (isEmpty(auth) ? (
              <>
                <h3>You are not signed in</h3>
              </>
            ) : (
                <>
                  <h3>Congrats! You are in</h3>
                  <button type="button" onClick={() => firebase.auth().signOut()}>Sign-out</button>
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