export default {
  snackbarStateGetter(state) {
    return state.isSnackbarActive
  },
  snackbarDataGetter(state) {
    return state.snackbarData
  },
}
