import axios, { CancelToken } from 'axios';
import uuidV4 from 'uuid/v4';
import { SEND_REQUEST, CANCEL_REQUEST } from '../actions/request';
import { setResponse } from '../actions/response';
import { addHistory } from '../actions/history';


// TODO: as user preference
const agent = axios.create({
  timeout: 10000,
  headers: {
    'User-Agent': 'Therapi/1.0.0'
  },
  validateStatus: status => status >= 200 && status < 600
});

const pending = new Map();

const apiMiddleware = ({ getState, dispatch }) => next => action => {
  // TODO: refactor
  const handleResponse = (id, response) => {
    const item = pending.get(id);
    pending.delete(id);
    response.latency = new Date() - item.createdAt;
    item.response = response;
    dispatch(setResponse(response));
    dispatch(addHistory(item));
  };
  const handleError = (error) => {
    console.log(error);
    return;
  };

  switch (action.type) {
  case SEND_REQUEST:
    const id = uuidV4();
    const { request } = getState().local;
    const createdAt = new Date();
    pending.set(id, { id, request, createdAt });
    agent(request)
      .then(response => handleResponse(id, response))
      .catch(handleError);
    return;
  case CANCEL_REQUEST:
    return;
  default:
    return next(action);
  }
};

export default apiMiddleware;
