import { CHANGE_REQUEST_URL } from '../actions/request';


const requestUrlReducer = (state = '', action) => {
  switch (action.type) {
  case CHANGE_REQUEST_URL:
    return action.payload.url;
  default:
    return state;
  }
}

export default requestUrlReducer;
