import { SEND_REQUEST } from '../actions/request';
import { SET_RESPONSE } from '../actions/response';


function response(state = {}, action) {
  switch (action.type) {
    case SET_RESPONSE:
      const { status, headers, data } = action.payload.response;
      return { status, headers, data };
    default:
      return state;
  }
}

export default response;
