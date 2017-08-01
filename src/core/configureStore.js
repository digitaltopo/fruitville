import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import createHistory from 'history/createBrowserHistory';
import {routerMiddleware} from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import initialState from './initialState';

// Browser History
const history = createHistory();

// TODO: Fix replay browser history:
// https://stackoverflow.com/questions/43473055/replay-actions-react-router-redux
// https://github.com/ReactTraining/react-router/issues/757

// Middleware
const middleware = process.env.NODE_ENV !== 'production'
  ? // Development Middleware
    [
      /* require('redux-immutable-state-invariant').default() */
    ]
  : // Production Middleware
    [routerMiddleware(history), createSagaMiddleware];

// Create the store
const store = createStore(
  // Reducer
  rootReducer,
  // Initial State
  initialState,
  // Redux DevTools
  composeWithDevTools(applyMiddleware(...middleware))
);

// Hot Module Reloading
if (module.hot) {
  module.hot.accept('./rootReducer', () => {
    const reducers = require('./rootReducer').default;
    store.replaceReducer(reducers(store.asyncReducers));
  });
}

export {store, history};
