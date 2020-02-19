export function socialLogin({ firebase, provider }) {
  return firebase.login({ provider, type: 'popup' })
}

export function logout({ firebase }) {
  return firebase.auth().signOut()
}


