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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = (0, _radium2.default)(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input(props) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    _this.state = {
      isError: _this.props.isError,
      uploadInfo: ''
    };

    _this.getComponent = _this.getComponent.bind(_this);
    _this.getProps = _this.getProps.bind(_this);
    _this.validator = _this.validator.bind(_this);
    _this.onChange = _this.validator('change').bind(_this);
    _this.onBlur = _this.validator('blur').bind(_this);
    return _this;
  }

  _createClass(Input, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          value = _props.value,
          defaultValue = _props.defaultValue;


      if (value || defaultValue) {
        this.onChange({
          target: {
            value: value || defaultValue,
            files: [{
              name: value || defaultValue,
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
          message = _props2.message,
          rule = _props2.rule;
      var isError = this.state.isError;


      return _react2.default.createElement(
        'div',
        { style: _input2.default.root },
        _react2.default.createElement(
          'h4',
          { style: _input2.default.title(isError || this.props.isError) },
          _react2.default.createElement(
            'font',
            { style: _input2.default.isRequired(rule) },
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
            { style: _input2.default.message.text(isError || this.props.isError) },
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
            var _state = this.state,
                uploadInfo = _state.uploadInfo,
                isError = _state.isError;

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
                }, hasValue ? {} : _input2.default.placeholder(isError || this.props.isError)]
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
      var rule = this.props.rule;
      var isError = this.state.isError;

      var props = _extends({}, this.props);
      var propsStyle = [_input2.default.input(rule, isError || this.props.isError)];

      delete props.rule;
      delete props.title;
      delete props.message;
      delete props.isError;

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

      var newProps = _extends({
        style: propsStyle
      }, props, {
        onChange: this.onChange,
        onBlur: this.onBlur
      });

      return newProps;
    }
  }, {
    key: 'validator',
    value: function validator(type) {
      var _this2 = this;

      var func = type === 'change' ? this.props.onChange : this.props.onBlur;

      return function (e) {
        var rule = _this2.props.rule;

        var uploadInfo = '';
        var isError = false;

        switch (rule) {
          case 'not empty':
            isError = _validator3.default.isEmpty(e.target.value);
            break;

          case 'email':
            {
              var email = _validator3.default.normalizeEmail(e.target.value);
              if (!email) isError = true;
              break;
            }

          case 'file':
            if (e.target.files.length !== 0) {
              var file = e.target.files[0];

              if (file.size === 0) isError = true;

              uploadInfo = file.name + ' (' + Math.round(file.size * 0.001) + ' KB)';
            } else isError = true;
            break;

          default:
            break;
        }

        func({ value: e.target.value, isError: isError, target: e.target });

        _this2.setState({ isError: isError, uploadInfo: uploadInfo });
      };
    }
  }]);

  return Input;
}(_react2.default.Component), _class2.propTypes = {
  id: _react2.default.PropTypes.string,
  type: _react2.default.PropTypes.string,
  placeholder: _react2.default.PropTypes.string,
  value: _react2.default.PropTypes.string,
  defaultValue: _react2.default.PropTypes.string,
  title: _react2.default.PropTypes.string.isRequired,
  message: _react2.default.PropTypes.string,
  rule: _react2.default.PropTypes.string,
  isError: _react2.default.PropTypes.bool,
  onChange: _react2.default.PropTypes.func,
  onBlur: _react2.default.PropTypes.func
}, _class2.defaultProps = {
  isError: false,
  type: 'text',
  onChange: function onChange() {},
  onBlur: function onBlur() {}
}, _temp)) || _class;

exports.default = Input;