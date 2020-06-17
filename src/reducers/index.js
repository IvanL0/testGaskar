import { combineReducers } from 'redux'

import user from './user'
import handlingErrors from './handlingErrors'

export const appReducer = combineReducers({
  user,
  handlingErrors,
})