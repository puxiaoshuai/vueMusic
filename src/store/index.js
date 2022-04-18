import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    number: 0
  },
  mutations: {
    add(state) {
      state.number += 1
    },
    reduce(state) {
      state.number -= 1
    }
  },
  actions: {
  },
  modules: {
  }
})
