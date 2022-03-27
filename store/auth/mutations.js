export default {
  setAuthUserMutator(state, payload) {
    state.authUse = payload
  },
  setIsLoggedInMutator(state, payload) {
    state.isLoggedIn = !!payload
  },
}
