import { DECREMENT, INCREMENT, RESET_STATUS, SET_STATUS } from '@/constants/mutation-types'
import { ERROR, INFO } from '@/constants/status-types'

const status = store => {
  store.subscribe((mutation, state) => {
    const {
      type,
    } = mutation

    if ([DECREMENT, INCREMENT].includes(type)) {
      const {
        count,
      } = state.counter || {}

      if (count === 0) {
        // Set an error state if count is zero.
        store.dispatch({
          type: SET_STATUS,
          category: ERROR,
        })
      } else if (count % 5 === 0) {
        // Set an info state if count is a factor of 5.
        store.dispatch({
          type: SET_STATUS,
          category: INFO,
        })
      } else if (state.status.category !== '') {
        // Reset status if non-empty and neither of the above apply.
        store.dispatch(RESET_STATUS)
      }
    }
  })
}

export default status
