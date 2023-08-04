import { combineReducers } from 'redux'
import lineReducer from './containers/banner/reducer'


const home = combineReducers({
  lines: lineReducer,
})

export default home