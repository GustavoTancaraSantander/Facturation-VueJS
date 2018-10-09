import Vue from 'vue'
import Vuex from 'Vuex'
import services from './service'

Vue.use(Vuex)

const state = {
  services
}
export default new Vuex.Store({
  state
})
