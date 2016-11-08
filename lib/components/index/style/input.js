'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fontSize = '18px';
var letterSpacing = '1.2px';

exports.default = {
  root: {
    width: '100%'
  },

  isRequired: function isRequired(required) {
    return required ? {
      color: _color2.default.red
    } : {
      display: 'none'
    };
  },

  title: function title(isError) {
    return {
      margin: '0px',
      color: isError ? _color2.default.red : 'black',
      letterSpacing: letterSpacing,
      fontSize: fontSize
    };
  },

  input: function input(hasRules, isError) {
    return {
      margin: '5px 0px 25px',
      padding: '5px 10px',
      width: 'calc(100% - 10px * 2)',
      height: '30px',
      lineHeight: '30px',
      fontSize: fontSize,
      letterSpacing: letterSpacing,
      border: 'solid 1.5px ' + (isError ? _color2.default.red : 'black'),
      borderRadius: '5px',
      color: isError ? _color2.default.red : 'black',
      outline: '0px',
      resize: 'none',
      ':focus': {
        border: 'solid 1.5px ' + (isError ? _color2.default.red : _color2.default.blue)
      }
    };
  },

  textarea: {
    height: '100px'
  },

  label: {
    display: 'block'
  },

  hidden: {
    display: 'none'
  },

  placeholder: function placeholder(isError) {
    return {
      color: isError ? 'rgb(242, 172, 155)' : '#828282'
    };
  },

  message: {
    root: {
      position: 'relative'
    },

    text: function text(isError) {
      return isError ? {
        position: 'absolute',
        top: '-22px',
        margin: '0px',
        fontSize: '12px',
        color: _color2.default.red
      } : {
        display: 'none'
      };
    }
  }
};