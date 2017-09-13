'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _FirstPage = require('./FirstPage');

var _FirstPage2 = _interopRequireDefault(_FirstPage);

var _SecondPage = require('./SecondPage');

var _SecondPage2 = _interopRequireDefault(_SecondPage);

var _NoMatch = require('../components/NoMatch');

var _NoMatch2 = _interopRequireDefault(_NoMatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Server Side Rendering with Create React App v2'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Hey, so I\'ve rewritten this example with react-router v4'
        ),
        _react2.default.createElement(
          'p',
          null,
          'This code is on github: ',
          _react2.default.createElement(
            'a',
            { href: 'https://github.com/ayroblu/ssr-create-react-app-v2' },
            'https://github.com/ayroblu/ssr-create-react-app-v2'
          )
        ),
        _react2.default.createElement(
          'p',
          null,
          'Medium article: ',
          _react2.default.createElement(
            'a',
            { href: 'https://medium.com/@benlu/ssr-with-create-react-app-v2-1b8b520681d9' },
            'https://medium.com/@benlu/ssr-with-create-react-app-v2-1b8b520681d9'
          )
        ),
        _react2.default.createElement(
          _reactRouterDom.Switch,
          null,
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _FirstPage2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/second', component: _SecondPage2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { component: _NoMatch2.default })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;