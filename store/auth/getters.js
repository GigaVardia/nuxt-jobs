export default {
  authUserGetter(state) {
    return state.authUser
  },
  isLoggedInGetter(state) {
    return Boolean(state.authUser)
  },
}
