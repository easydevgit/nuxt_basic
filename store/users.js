export const state = () => ({
  users: []
})

export const mutations = {
  setUsers(state, data) {
    state.users = data
  }
}

export const getters = {
  getUsers(store) {
    return store.users
  }
}

export const actions = {
  async fetchUsers({
    commit
  }) {
    const users = await this.$axios.$get("https://randomuser.me/api/?results=10");
    commit('setUsers', users.results)
  }
}
