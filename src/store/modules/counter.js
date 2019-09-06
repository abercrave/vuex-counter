import { DECREMENT, INCREMENT } from '@/constants/mutation-types'

const counter = {
  state: {
    count: 0,
  },
  mutations: {
    [DECREMENT]: state => state.count--,
    [INCREMENT]: state => state.count++,
  },
  actions: {
    [DECREMENT]: ({ commit }) => commit(DECREMENT),
    [INCREMENT]: ({ commit }) => commit(INCREMENT),
  },
}

export default counter
