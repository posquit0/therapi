import { SEND_REQUEST } from '../actions/request';
import { SET_RESPONSE } from '../actions/response';


const initialState = {
  status: null,
  headers: {},
  data: null
};

function response(state = initialState, action = {}) {
  switch (action.type) {
    case SET_RESPONSE:
      const { status, headers, data } = action.payload.response;
      return { status, headers, data };
    default:
      return state;
  }
}

export default response;
