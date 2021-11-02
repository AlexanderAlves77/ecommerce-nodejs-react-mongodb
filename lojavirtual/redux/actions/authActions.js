import { AUTHENTICAR_TOKEN } from '../types'

export const reauthenticate = token => ({
  type: AUTHENTICAR_TOKEN,
  payload: token,
})

export default {
  reauthenticate,
}
