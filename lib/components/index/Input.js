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

var _validator2 = require('validator');

var _validator3 = _interopRequireDefault(_validator2);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _input = require('./style/input');

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = (0, _radium2.default)(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input(props) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    _this.state = {
      isError: false,
      message: '',
      uploadInfo: '',
      value: ''
    };

    _this.getComponent = _this.getComponent.bind(_this);
    _this.getProps = _this.getProps.bind(_this);
    _this.validator = _this.validator.bind(_this);
    _this.onChange = _this.validator(_this.props.onChange).bind(_this);
    _this.onBlur = _this.validator(_this.props.onBlur).bind(_this);
    return _this;
  }

  _createClass(Input, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          rules = _props.rules,
          value = _props.value;


      if (rules && value && value !== '') {
        this.validator()({
          target: {
            value: value || '',
            files: [{
              name: value || '',
              size: 0
            }]
          }
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          title = _props2.title,
          rules = _props2.rules,
          titleStyle = _props2.titleStyle,
          messageStyle = _props2.messageStyle;
      var _state = this.state,
          isError = _state.isError,
          message = _state.message;


      return _react2.default.createElement(
        'div',
        { style: _input2.default.root },
        _react2.default.createElement(
          'h4',
          { style: [_input2.default.title(isError), titleStyle] },
          _react2.default.createElement(
            'font',
            { style: _input2.default.isRequired(rules.length !== 0) },
            '*'
          ),
          title
        ),
        this.getComponent(),
        _react2.default.createElement(
          'div',
          { style: _input2.default.message.root },
          _react2.default.createElement(
            'p',
            { style: [_input2.default.message.text(isError), messageStyle] },
            message
          )
        )
      );
    }
  }, {
    key: 'getComponent',
    value: function getComponent() {
      var type = this.props.type;

      var props = this.getProps();

      switch (type) {
        case 'textarea':
          return _react2.default.createElement('textarea', props);

        case 'file':
          {
            var _props3 = this.props,
                placeholder = _props3.placeholder,
                id = _props3.id;
            var _state2 = this.state,
                uploadInfo = _state2.uploadInfo,
                isError = _state2.isError;

            var hasValue = this.state.uploadInfo !== '';

            delete props.id;
            delete props.value;
            (0, _invariant2.default)(this.props.id, 'You need to set "id" when you use type of file.');

            return [_react2.default.createElement(
              'label',
              _extends({}, props, {
                htmlFor: this.props.id,
                key: 'label',
                style: [props.style, {
                  height: 'initial'
                }, hasValue ? {} : _input2.default.placeholder(isError)]
              }),
              hasValue ? uploadInfo : placeholder
            ), _react2.default.createElement('input', _extends({ type: 'file',
              key: 'input',
              id: id
            }, props, {
              style: _input2.default.hidden
            }))];
          }

        default:
          return _react2.default.createElement('input', props);
      }
    }
  }, {
    key: 'getProps',
    value: function getProps() {
      var _state3 = this.state,
          isError = _state3.isError,
          value = _state3.value;

      var _props4 = this.props,
          rules = _props4.rules,
          props = _objectWithoutProperties(_props4, ['rules']);

      var propsStyle = [_input2.default.input(rules, isError)];

      delete props.title;
      delete props.titleStyle;
      delete props.messageStyle;

      switch (props.type) {
        case 'textarea':
          propsStyle.push(_input2.default.textarea);
          break;

        case 'email':
          props.type = 'text';
          break;

        case 'file':
          propsStyle.push(_input2.default.label);
          break;

        default:
          break;
      }

      var newProps = _extends({}, props, {
        style: [propsStyle, props.style],
        onChange: this.onChange,
        onBlur: this.onBlur,
        value: value
      });

      return newProps;
    }
  }, {
    key: 'validator',
    value: function validator() {
      var _this2 = this;

      var func = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

      return function (e) {
        var rules = _this2.props.rules;

        var uploadInfo = '';
        var isError = false;
        var message = '';
        var value = e.target.value;

        rules.forEach(function (rule) {
          if (isError) return;

          if (typeof rule.validator === 'string') {
            (0, _invariant2.default)(_validator3.default[rule.validator], rule.validator + ' is not in validator. You can write a function to use.');

            switch (rule.validator) {
              case 'isEmail':
                if (!_validator3.default.normalizeEmail(value, rule.options)) isError = true;
                break;

              case 'isFile':
                if (e.target.files.length !== 0) {
                  var file = e.target.files[0];

                  if (file.size === 0) isError = true;

                  uploadInfo = file.name + ' (' + Math.round(file.size * 0.001) + ' KB)';
                } else isError = true;
                break;

              default:
                isError = _validator3.default[rule.validator](value, rule.options);
                break;
            }
          } else isError = rule.validator(e) || false;

          if (isError) message = rule.message;
        });

        func({ value: value, isError: isError, e: e });

        _this2.setState({ isError: isError, uploadInfo: uploadInfo, message: message, value: value });
      };
    }
  }]);

  return Input;
}(_react2.default.Component), _class2.propTypes = {
  id: _react2.default.PropTypes.string,
  type: _react2.default.PropTypes.string,
  placeholder: _react2.default.PropTypes.string,
  onChange: _react2.default.PropTypes.func,
  onBlur: _react2.default.PropTypes.func,
  value: _react2.default.PropTypes.string,
  style: _react2.default.PropTypes.object,
  titleStyle: _react2.default.PropTypes.object,
  messageStyle: _react2.default.PropTypes.object,
  title: _react2.default.PropTypes.string.isRequired,
  rules: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
    validator: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.func]),
    message: _react2.default.PropTypes.string
  }))
}, _class2.defaultProps = {
  rules: [],
  type: 'text',
  onChange: function onChange() {},
  onBlur: function onBlur() {}
}, _temp)) || _class;

exports.default = Input;