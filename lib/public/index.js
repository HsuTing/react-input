'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Wrapper = require('../components/share/radium/Wrapper');

var _Wrapper2 = _interopRequireDefault(_Wrapper);

var _Index = require('../components/index/Index');

var _Index2 = _interopRequireDefault(_Index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  _reactDom2.default.render(_react2.default.createElement(
    _Wrapper2.default,
    null,
    _react2.default.createElement(_Index2.default, null)
  ), document.getElementById('root'));
})();