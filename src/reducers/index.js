import { combineReducers } from 'redux'

import handlingErrors from './handlingErrors'
import projects from './projects'
import user from './user'


export const appReducer = combineReducers({
  handlingErrors,
  projects,
  user,
})