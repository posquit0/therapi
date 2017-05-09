import { combineReducers } from 'redux';
import db from './db';
import local from './local';


// {
//   db: {
//     projects: {},
//     config: {}
//   },
//   local: {
//     project: {},
//     request: {
//       method: 'get',
//       query: ,
//       headers: {},
//       data: {},
//       createdAt: 129129192
//     },
//     response: {
//       headers: {

//       },
//       status: 200,
//       data: "",
//       createdAt: 1129512
//     },
//     ui: {
//       activeRequests: 0
//     }
//   },
//   vender: {
//   }
// }
const rootReducer = combineReducers({
  db,
  local
});

export default rootReducer;
