import { combineReducers } from 'redux'
import lineReducer from './containers/Line/reducer'


const about = combineReducers({
  lines: lineReducer,
})

export default about