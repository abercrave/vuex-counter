import { RESET_STATUS, SET_STATUS } from '@/constants/mutation-types'

const initialState = {
  category: '',
}

const status = {
  state: {
    category: '',
  },
  mutations: {
    [RESET_STATUS]: state => Object.assign(state, initialState),
    [SET_STATUS]: (state, payload) => {
      state.category = payload.category
    },
  },
  actions: {
    [RESET_STATUS]: ({ commit }) => commit(RESET_STATUS),
    [SET_STATUS]: ({ commit }, payload) => commit(SET_STATUS, payload),
  },
}

export default status
