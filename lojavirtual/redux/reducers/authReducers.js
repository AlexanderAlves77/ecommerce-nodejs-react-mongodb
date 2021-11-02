import { AUTHENTICAR_TOKEN } from '../types'

const initialState = { token: null, usuario: null }

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICAR_TOKEN:
      return { ...state, token: action.payload }
    default:
      return state
  }
}
