import { combineReducers } from 'redux';
import requestMethod from './requestMethod';
import requestUrl from './requestUrl';
import requestHeaders from './requestHeaders';


// TODO: data, query
const requestReducer = combineReducers({
  method: requestMethod,
  url: requestUrl,
  headers: requestHeaders
});

export default requestReducer;
