'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  root: function root(isShow) {
    return _extends(isShow ? {} : {
      border: '0px'
    }, {
      top: 'calc(100% + 5px)',
      left: '-1px',
      width: '100%',
      height: 'initial',
      maxHeight: '30vh',
      background: 'white',
      padding: '0px',
      overflowX: 'hidden',
      overflowY: 'scroll'
    });
  },

  value: {
    padding: '5px 10px'
  },

  item: function item(isSelected) {
    return {
      display: 'block',
      padding: '5px 10px',
      color: 'inherit',
      fontWeight: isSelected ? 'bold' : 'normal',
      background: isSelected ? '#EEEEEE' : 'initial',
      ':hover': {
        background: '#EEEEEE'
      }
    };
  },

  icon: function icon(isShow) {
    return {
      display: 'inline-block',
      position: 'absolute',
      top: 'calc(50% - 10px)',
      right: '5px',
      width: '20px',
      height: '20px',
      transform: isShow ? 'rotate(180deg)' : 'rotate(0deg)',
      animation: 'x 0.5s ease 0s',
      animationName: _radium2.default.keyframes({
        '0%': {
          transform: isShow ? 'rotate(0deg)' : 'rotate(180deg)'
        },
        '100%': {
          transform: isShow ? 'rotate(180deg)' : 'rotate(0deg)'
        }
      }, 'pulse')
    };
  }
};