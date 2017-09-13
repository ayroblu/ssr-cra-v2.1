'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = require('redux');

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import createLogger from 'redux-logger'
//import createSagaMiddleware from 'redux-saga'

//const logger = createLogger()
//const sagaMiddleware = createSagaMiddleware()

function configureStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // Create the store with two middlewares
  var middlewares = [
    //  sagaMiddleware
    //, logger
  ];

  var enhancers = [_redux.applyMiddleware.apply(undefined, middlewares)];

  var store = (0, _redux.createStore)(_reducers2.default, initialState, _redux.compose.apply(undefined, enhancers)

  // Extensions
  //store.runSaga = sagaMiddleware.run
  );store.asyncReducers = {}; // Async reducer registry

  return store;
}