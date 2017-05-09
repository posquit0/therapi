import { combineReducers } from 'redux';
import history from './history';
import config from './config';


const dbReducer = combineReducers({
  history,
  config
});

export default dbReducer;
