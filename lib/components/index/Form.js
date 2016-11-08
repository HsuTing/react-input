'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = (0, _radium2.default)(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form(props) {
    _classCallCheck(this, Form);

    var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

    _this.state = {
      data: _this.props.data
    };

    _this.checkNumber = _this.checkNumber.bind(_this);
    _this.changeData = _this.changeData.bind(_this);
    return _this;
  }

  _createClass(Form, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.checkNumber();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.checkNumber();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var data = this.state.data;

      var props = _extends({}, this.props);

      delete props.data;

      return _react2.default.createElement(
        'form',
        props,
        _react2.default.Children.map(this.props.children, function (node, index) {
          if (node.type.displayName !== _react2.default.createElement(_Input2.default, { title: 'title', type: 'text' }).type.displayName) return node;

          return _react2.default.cloneElement(node, {
            value: data[index] ? data[index].value || '' : '',
            isError: data[index] ? data[index].isError || false : false,
            onChange: _this2.changeData(index, node.props.onChange)
          });
        })
      );
    }
  }, {
    key: 'checkNumber',
    value: function checkNumber() {
      var count = 0;

      _react2.default.Children.forEach(this.props.children, function (node, index) {
        if (node.type.displayName !== _react2.default.createElement(_Input2.default, { title: 'title', type: 'text' }).type.displayName) return;

        count = count + 1;
      });

      (0, _invariant2.default)(count === this.state.data.length, 'The length of your data should be equal to the length of your childrens.');
    }
  }, {
    key: 'changeData',
    value: function changeData(index) {
      var _this3 = this;

      var onChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

      return function (data) {
        var newData = [].concat(_toConsumableArray(_this3.state.data));

        Object.keys(data).forEach(function (key) {
          newData[index][key] = data[key];
        });
        onChange(data);

        _this3.setState({
          data: _this3.props.onChange(newData)
        });
      };
    }
  }]);

  return Form;
}(_react2.default.Component), _class2.propTypes = {
  data: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
    value: _react2.default.PropTypes.string.isRequired,
    isError: _react2.default.PropTypes.boolean
  })).isRequired,
  children: _react2.default.PropTypes.node.isRequired,
  onChange: _react2.default.PropTypes.func
}, _class2.defaultProps = {
  data: [],
  onChange: function onChange(data) {
    return data;
  }
}, _temp)) || _class;

exports.default = Form;