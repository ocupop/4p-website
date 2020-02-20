export function login({ firebase, values: { email, password } }) {
  return firebase.login({ email, password })
}

export function socialLogin({ firebase, provider }) {
  return firebase.login({ provider, type: 'popup' })
}

export function logout({ firebase }) {
  return firebase.auth().signOut()
}


