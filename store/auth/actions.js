export default {
  setAuthUserAction({ commit }, payload) {
    commit('setAuthUserMutator', payload)
  },
  setIsLoggedInAction({ commit }, payload) {
    commit('setAuthUserMutator', payload)
  },
}
