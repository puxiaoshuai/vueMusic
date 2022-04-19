import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    number: 0,
    isShowPopup: false
  },
  mutations: {
    add(state) {
      state.number += 1
    },
    reduce(state) {
      state.number -= 1
    },
    handleShowPopup(state) {
      state.isShowPopup = true
    },
    handleDissPopup(state) {
      state.isShowPopup = false
    }
  },
  actions: {
  },
  modules: {
  }
})
