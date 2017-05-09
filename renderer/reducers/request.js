import { SEND_REQUEST, CANCEL_REQUEST } from '../actions/request';


function request(state = {}, action) {
  switch (action.type) {
    case SEND_REQUEST:
      return state;
    case CANCEL_REQUEST:
      return state;
    default:
      return state;
  }
}

export default request;
