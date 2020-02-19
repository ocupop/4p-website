export function socialLogin({ firebase, provider }) {
  return firebase.login({ provider, type: 'pop-up' })
}

export function logout({ firebase }) {
  return firebase.auth().signOut()
}


