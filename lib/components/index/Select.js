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

var _arrowDropDown = require('react-icons/lib/md/arrow-drop-down');

var _arrowDropDown2 = _interopRequireDefault(_arrowDropDown);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _input = require('./style/input');

var _input2 = _interopRequireDefault(_input);

var _select = require('./style/select');

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var rootParentStyle = {
  position: 'relative',
  zIndex: '10',
  cursor: 'pointer'
};

var rootStyle = {
  position: 'absolute',
  margin: '0px'
};

var iconStyle = {
  width: '100%',
  height: '100%',
  color: 'inherit',
  verticalAlign: 'top'
};

var Select = (0, _radium2.default)(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select(props) {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

    _this.state = {
      value: _this.props.value,
      isError: false,
      isShow: false
    };

    _this.toggleSelect = _this.toggleSelect.bind(_this);
    _this.blur = _this.blur.bind(_this);
    _this.change = _this.change.bind(_this);
    return _this;
  }

  _createClass(Select, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          placeholder = _props.placeholder,
          rules = _props.rules,
          children = _props.children,
          style = _props.style,
          props = _objectWithoutProperties(_props, ['placeholder', 'rules', 'children', 'style']);

      var _state = this.state,
          value = _state.value,
          isError = _state.isError,
          isShow = _state.isShow;


      return _react2.default.createElement(
        _Input2.default,
        _extends({}, props, {
          value: value,
          rules: rules,
          directValue: value,
          type: 'hidden',
          onChange: this.change
        }),
        _react2.default.createElement(
          'div',
          { style: [_input2.default.input(rules, isError), style, rootParentStyle],
            tabIndex: '1',
            onClick: this.toggleSelect,
            onBlur: this.blur
          },
          value === '' ? placeholder : value,
          _react2.default.createElement(
            'div',
            _extends({}, props, {
              key: 'root',
              style: [_input2.default.input(rules, isError), _select2.default.root(isShow), style, value === '' ? _input2.default.placeholder(isError) : {}, rootStyle]
            }),
            isShow ? _react2.default.Children.map(children, function (node) {
              return _react2.default.cloneElement(node, {
                style: [_select2.default.item(node.key === value), node.props.style],
                onClick: _this2.changeValue.bind(_this2, node.key, node.props.onClick)
              });
            }, this) : null
          ),
          _react2.default.createElement(
            _radium.StyleRoot,
            { style: _select2.default.icon(isShow) },
            _react2.default.createElement(_arrowDropDown2.default, { style: iconStyle })
          )
        )
      );
    }
  }, {
    key: 'blur',
    value: function blur(e) {
      if (this.props.onBlur) this.props.onBlur(e);
      this.setState({ isShow: false });
    }
  }, {
    key: 'toggleSelect',
    value: function toggleSelect() {
      this.setState({ isShow: !this.state.isShow });
    }
  }, {
    key: 'changeValue',
    value: function changeValue(value) {
      var click = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      var e = arguments[2];

      click(e);
      this.setState({ value: value });
    }
  }, {
    key: 'change',
    value: function change(data) {
      var isError = data.isError;


      if (this.props.onChange) this.props.onChange(data);
      this.setState({ isError: isError });
    }
  }]);

  return Select;
}(_react2.default.Component), _class2.propTypes = {
  value: _react2.default.PropTypes.string,
  placeholder: _react2.default.PropTypes.string,
  onBlur: _react2.default.PropTypes.func,
  onChange: _react2.default.PropTypes.func,
  style: _react2.default.PropTypes.object,
  children: _react2.default.PropTypes.node,
  rules: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
    validator: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.func]),
    message: _react2.default.PropTypes.string
  }))
}, _class2.defaultProps = {
  value: ''
}, _temp)) || _class;

exports.default = Select;