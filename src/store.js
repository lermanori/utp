import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    label: "",
    activeClass: "label"

  },
  getters: {
    getLabel: (state) => {
      return state.label
    },
    getClass: (state) => {
      return state.activeClass
    }
  },
  mutations: {
    setLabel(state, arg) {
      state.label = arg;
    },
    setClass(state, arg) {
      state.activeClass = arg;
    }
  },
  actions: {


  }
})