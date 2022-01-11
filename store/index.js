export const state = () => ({
  siteName: 'The best Company',
  users: []
})

export const mutations = {
  setSiteName(state) {
    // some code
  },
  setUsers(state, data) {
    state.users = data
  }
}

export const getters = {
  getSiteName(store) {
    return store.siteName
  },
  getUsers(store) {
    return store.users
  }
}

export const actions = {
  async nuxtServerInit({
    commit
  }, context) {
    const users = await this.$axios.$get("https://randomuser.me/api/?results=2");
    commit('setUsers', users.results)
  },
  changeSiteName() {

  }
}
