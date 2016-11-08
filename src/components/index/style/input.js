'use strict';

import color from 'color';

const fontSize = '18px';
const letterSpacing = '1.2px';

export default {
  root: {
    width: '100%'
  },

  isRequired: required => {
    return required ? {
      color: color.red
    } : {
      display: 'none'
    }
  },

  title: isError => {
    return {
      margin: '0px',
      color: isError ? color.red : 'black',
      letterSpacing,
      fontSize
    }
  },

  input: (hasRules, isError) => {
    return {
      margin: '5px 0px 25px',
      padding: '5px 10px',
      width: 'calc(100% - 10px * 2)',
      height: '30px',
      lineHeight: '30px',
      fontSize,
      letterSpacing,
      border: `solid 1.5px ${isError ? color.red : 'black'}`,
      borderRadius: '5px',
      color: isError ? color.red : 'black',
      outline: '0px',
      resize: 'none',
      ':focus': {
        border: `solid 1.5px ${isError ? color.red : color.blue}`
      }
    }
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

  placeholder: isError => {
    return {
      color: isError ? color.red : 'rgb(242, 172, 155)'
    };
  },

  message: {
    root: {
      position: 'relative'
    },

    text: isError => {
      return isError ? {
        position: 'absolute',
        top: '-22px',
        margin: '0px',
        fontSize: '12px',
        color: color.red
      } : {
        display: 'none'
      };
    }
  }
};
