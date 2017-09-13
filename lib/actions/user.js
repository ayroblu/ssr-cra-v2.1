'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.set = set;
exports.reset = reset;

var _user = require('../types/user');

function set(payload) {
  return {
    type: _user.SET,
    payload: payload
  };
}

function reset() {
  return {
    type: _user.RESET
  };
}