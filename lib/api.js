'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainApi = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = require('./config');

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Api = function () {
  function Api(options) {
    _classCallCheck(this, Api);

    this.apiUrl = _config.apiUrl;
    this.prefix = '';
    if (!options) {
      return;
    }
    var token = options.token;

    this.token = token;
  }

  _createClass(Api, [{
    key: 'getJsonHeaders',
    value: function getJsonHeaders() {
      return {
        'Accept': 'application/json'
      };
    }
  }, {
    key: 'postJsonHeaders',
    value: function postJsonHeaders() {
      return {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };
    }
  }, {
    key: 'setToken',
    value: function setToken(token) {
      this.token = token;
    }
  }, {
    key: 'handleUnauthed',
    value: function handleUnauthed(res) {
      if (res.status === 401) {
        return new Promise(function () {});
      } else {
        return res;
      }
    }
  }, {
    key: '_buildQueryString',
    value: function _buildQueryString(data) {
      return '?' + Object.keys(data).map(function (d) {
        return d + '=' + encodeURIComponent(data[d]);
      });
    }
  }]);

  return Api;
}();

var MainApi = exports.MainApi = function (_Api) {
  _inherits(MainApi, _Api);

  function MainApi(options) {
    _classCallCheck(this, MainApi);

    var _this = _possibleConstructorReturn(this, (MainApi.__proto__ || Object.getPrototypeOf(MainApi)).call(this, options));

    _this.prefix = '/api';
    return _this;
  }

  return MainApi;
}(Api);