import { SEND_REQUEST } from '../actions/request';
import { SET_RESPONSE } from '../actions/response';


const initialState = {
  status: null,
  statusText: null,
  headers: {},
  data: null,
  latency: null
};

function response(state = initialState, action = {}) {
  switch (action.type) {
    case SET_RESPONSE:
      const {
        status, statusText, headers, data, latency
      } = action.payload.response;
      return { status, statusText, headers, data, latency };
    default:
      return state;
  }
}

export default response;
