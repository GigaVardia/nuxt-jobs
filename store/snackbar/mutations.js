export default {
  snackbarMutator(state, payload) {
    state.isSnackbarActive = payload.isActive
    if (payload.isActive) {
      state.snackbarData.message =
        payload?.message || 'Something went wrong, try again later.'
      state.snackbarData.isError = payload?.error ? 'error' : 'success'
      state.snackbarData.timeout = payload?.timeout || '3000'
    }
  },
}
