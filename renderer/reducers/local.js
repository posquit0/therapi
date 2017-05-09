import { combineReducers } from 'redux';
import request from './request';
import response from './response';


const localReducer = combineReducers({
  request,
  response
});

export default localReducer;
