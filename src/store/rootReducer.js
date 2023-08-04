import { combineReducers } from 'redux'
import about from '../routes/About/rootReducer'


const rootReducer = combineReducers({
  about,
})

export default rootReducer
