import Vue from 'vue'
import Vuex from 'vuex'
import state from './stade'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  getters: {
    doubleCity (state) {
      return state.city + '' + state.city
    }
  }
})
