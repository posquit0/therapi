import { createStore, applyMiddleware, compose } from 'redux';
import apiMiddleware from '../middlewares/api';
import debounceMiddleware from '../middlewares/debounce';
import logMiddleware from '../middlewares/log';
import rootReducer from '../reducers';


const middlewares = [debounceMiddleware, logMiddleware, apiMiddleware];
const composeEnhancers =
  (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const configureStore = (initialState) => {
  const enhancers = composeEnhancers(
    applyMiddleware(...middlewares)
);

  return createStore(rootReducer, initialState, enhancers);
};

export default configureStore;
