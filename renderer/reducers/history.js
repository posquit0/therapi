import { ADD_HISTORY } from '../actions/history';


const initialState = [];

function history(state = initialState, action = {}) {
  switch (action.type) {
  case ADD_HISTORY:
    return [action.payload, ...state];
  default:
    return state;
  }
}

export default history;
