export default {
  async fetchAuthUserAction({ commit }) {
    const data = await new Promise((resolve) => {
      setTimeout(
        () =>
          resolve({
            id: 'userId',
            full_name: 'test testovich',
            avatar: null,
            pined_jobs: [],
            email: 'test1@gmail.com',
            resume: null,
          }),
        1000
      )
    })
    commit('fetchAuthUserMutator', data)
  },
  async logoutAction({ commit }) {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000)
    })

    commit('fetchAuthUserMutator', null)
  },
  async pinJobAction({ commit }, payload) {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000)
    })
    commit('pinJobMutator', payload)
  },
  async unpinJobAction({ commit }, payload) {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000)
    })
    commit('unpinJobMutator', payload)
  },
}
