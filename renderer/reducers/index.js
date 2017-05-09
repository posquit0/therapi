import { combineReducers } from 'redux';
import request from './request';
import response from './response';


// {
//   db: {
//     projects: {},
//     config: {}
//   },
//   local: {
//     project: {},
//     request: {

//     },
//     response: {
//       headers: {

//       },
//       status: 200,
//       data: ""
//     },
//     ui: {
//       activeRequests: 0
//     }
//   },
//   vender: {
//   }
// }
const rootReducer = combineReducers({
  request,
  response
});

export default rootReducer;
