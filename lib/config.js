'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var apiUrl = 'http://localhost:3001';
if (process.env.NODE_ENV === 'production') {
  exports.apiUrl = apiUrl = '';
}
exports.apiUrl = apiUrl;