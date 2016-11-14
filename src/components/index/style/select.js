'use strict';

import radium from 'radium';

export default {
  root: isShow => {
    return Object.assign(isShow ? {} : {
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

  item: isSelected => {
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

  icon: isShow => {
    return {
      display: 'inline-block',
      position: 'absolute',
      top: 'calc(50% - 10px)',
      right: '5px',
      width: '20px',
      height: '20px',
      transform: isShow ? 'rotate(180deg)' : 'rotate(0deg)',
      animation: 'x 0.5s ease 0s',
      animationName: radium.keyframes({
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
