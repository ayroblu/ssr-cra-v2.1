'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _user = require('../types/user');

var initialState = {
  email: 'user@example.com'
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _user.SET:
      return Object.assign({}, state, action.payload);
    case _user.RESET:
      return Object.assign({}, initialState);
    default:
      return state;
  }
}