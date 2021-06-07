import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import messagesReducer from './messagesReducer'
import authReducer from './authReducer'

export default combineReducers({
  user: usersReducer,
  message: messagesReducer,
  token: authReducer
})
