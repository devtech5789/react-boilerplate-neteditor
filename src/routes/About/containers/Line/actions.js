import axios from 'axios'
import {
  LINE_LOADING,
  LINE_ERRORS,
  GET_LINES,
  ADD_ONE,
  // DELETE_LINES,
} from './actionTypes'


// Get lines
export const getLines = _ => dispatch => {
  dispatch(setLineLoading())
  axios.get('http://localhost:3000/lines/')
    .then(res => {
      dispatch({
        type: GET_LINES,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: LINE_ERRORS,
        payload: err.response.data
      })
    })
}


// Increment line quantity
export const incrementLineQuantity = id => ({
  type: ADD_ONE,
  payload: id
})


// Lines loading
export const setLineLoading = _ => {
  return {
    type: LINE_LOADING
  }
}