import { createStore } from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

const state={

}

const store = new createStore({
  state,
  mutations,
  actions,
  getters,
  modules: {
  }
})

export default store  


