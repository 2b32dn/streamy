import {combineReducers} from 'redux'
import authReducers from './authReducers'
import streamReducer from './streamReducer'

// Redux-form
// formReducer is the given name we export reducer as
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  auth: authReducers,
  form: formReducer,
  streams: streamReducer
})