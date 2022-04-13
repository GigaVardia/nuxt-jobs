export default {
  fetchAuthUserMutator(state, payload) {
    state.authUser = payload
  },
  pinJobMutator(state, payload) {
    state.pined_jobs.push(payload)
  },
  unpinJobMutator(state, payload) {
    state.pined_jobs = state.pined_jobs.filter((id) => id !== payload)
  },
}
