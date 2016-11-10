'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _Style = require('../share/Style');

var _Style2 = _interopRequireDefault(_Style);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _Form = require('./Form');

var _Form2 = _interopRequireDefault(_Form);

var _index = require('./style/index');

var _index2 = _interopRequireDefault(_index);

var _static = require('./static');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (0, _radium2.default)(_class = function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: _index2.default },
        _react2.default.createElement(_Style2.default, null),
        _react2.default.createElement(
          _Form2.default,
          { data: _static.data },
          _react2.default.createElement(_Input2.default, { title: 'Text',
            placeholder: 'text'
          }),
          _react2.default.createElement(_Input2.default, { title: 'Text(can not empty and be equal to 1)',
            placeholder: 'text',
            rules: [{
              validator: 'not empty',
              message: 'Can not be empty'
            }, {
              validator: function validator(e) {
                if (e.target.value === '1') return true;
                return false;
              },
              message: 'test'
            }]
          }),
          _react2.default.createElement(_Input2.default, { type: 'email',
            title: 'Email',
            placeholder: 'email',
            rules: [{
              validator: 'email',
              message: 'Invalid email'
            }]
          }),
          _react2.default.createElement(_Input2.default, { type: 'file',
            title: 'File',
            placeholder: 'file',
            rules: [{
              validator: 'file',
              message: 'no file'
            }],
            id: 'file'
          }),
          _react2.default.createElement(_Input2.default, { type: 'textarea',
            title: 'Textarea',
            placeholder: 'textarea',
            rules: [{
              validator: 'not empty',
              message: 'Can not be empty'
            }]
          })
        )
      );
    }
  }]);

  return Index;
}(_react2.default.Component)) || _class;

exports.default = Index;