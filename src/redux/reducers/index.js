
import { combineReducers } from 'redux'
import { loginReducer } from './login'
import { loggedInStatus } from './logStatus'

export const globalReducer = combineReducers ({user : loginReducer, loggedIn : loggedInStatus})
export { loginReducer }