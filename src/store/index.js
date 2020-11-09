import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {},
  state: {
    msg: 1,
    isMobile: false
  },
  mutations: {
    setMsg (state, msg) {
      state.msg = msg
    },
    setIsMobile (state, isMobile) {
      state.isMobile = isMobile
    }
  },
  ctions: {}
})
