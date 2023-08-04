import {
  LINE_LOADING,
  LINE_ERRORS,
  GET_LINES,
  ADD_ONE,
  // DELETE_LINES,
} from './actionTypes'


const initialState = {
  lines: null,
  loading: false,
  errors: [],
}


const lineReducer = (state = initialState, action) => {
  switch (action.type) {

    case LINE_LOADING:
      return {
        ...state,
        loading: true,
      }

    case GET_LINES:
      return {
        ...state,
        lines: action.payload,
        loading: false,
      }

    case ADD_ONE:
      const lines = state.lines.map(line => {
        if (line.id === action.payload) {
          return {
            ...line,
            quantity: line.quantity += 1
          }
        } else {
          return line
        }
      })

      return ({
        ...state,
        lines
      })

    // case DELETE_LINES:
    //   return {
    //     ...state,
    //     lines: state.lines.filter(line => line._id !== action.payload),
    //   }

    case LINE_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      }

    default:
      return state;
  }
}

export default lineReducer