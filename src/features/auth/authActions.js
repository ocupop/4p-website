export function socialLogin({ firebase, provider }) {
  return firebase.login({ provider, type: 'redirect' })
}

export function logout({ firebase }) {
  return firebase.auth().signOut()
}


