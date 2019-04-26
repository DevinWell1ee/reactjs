// 创建store

import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import reducers from './reducer';
import rootSaga from './saga'

// Build the middleware for intercepting and dispatching navigation actions
// const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, loggerMiddleware];

 // enhancers
const enhancers = [];
let composeEnhancers = compose;

if (process.env.NODE_ENV === 'development') {
  // 开发环境，开启redux-devtools
  const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  if (typeof composeWithDevToolsExtension === 'function') {
    composeEnhancers = composeWithDevToolsExtension;
  }
}

let allReducers = {
  ...reducers
};

// create store
var store = createStore(
  combineReducers(allReducers),

  composeEnhancers(
    applyMiddleware(...middlewares),
    ...enhancers
  )
)

sagaMiddleware.run(rootSaga)

export default store;