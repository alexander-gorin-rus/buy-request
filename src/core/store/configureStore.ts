import { createStore, applyMiddleware, Middleware } from 'redux';
import logger from 'redux-logger';
import { SagaMiddleware } from 'redux-saga';
import sagaMiddleware from '../sagas/sagaMiddleware';
import rootReducer from '../reducers';
import initialState from '../initialState';

const middlewareList: [SagaMiddleware<object> | Middleware] = [sagaMiddleware];
if (process.env.REACT_APP_REDUX_LOGGER) {
  middlewareList.push(logger);
}

export default createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middlewareList),
);
