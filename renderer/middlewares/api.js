import axios, { CancelToken } from 'axios';
import { SEND_REQUEST, CANCEL_REQUEST } from '../actions/request';
import { setResponse } from '../actions/response';


const canceled = new Map();

const apiMiddleware = ({ getState, dispatch }) => next => action => {
  const requestId = '4444';
  // const requestId = action.payload.request.id;
  const handleResponse = (response) => {
    dispatch(setResponse(response));
  };
  const handleError = (error) => {
    if (requestId && canceled.get(requestId))
      return;
  };

  switch (action.type) {
    case SEND_REQUEST:
      const { request } = getState().local;
      axios(request)
        .then(handleResponse)
        .catch(handleError);
    return;
  case CANCEL_REQUEST:
      canceled.set(requestId, true);
      setTimeout(() => canceled.delete(requestId), 5000);
  }

  return next(action);
};

export default apiMiddleware;
