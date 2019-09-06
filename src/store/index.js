import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'
import status from './modules/status'
import statusPlugin from './plugins/status'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    counter,
    status,
  },
  plugins: [statusPlugin],
})

export default store;
