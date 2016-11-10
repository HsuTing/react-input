'use strict';

import React from 'react';
import radium from 'radium';
import validator from 'validator';
import invariant from 'invariant';

import style from './style/input';

@radium
export default class Input extends React.Component {
  static propTypes = {
    id: React.PropTypes.string,
    type: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    onChange: React.PropTypes.func,
    onBlur: React.PropTypes.func,
    value: React.PropTypes.string,
    defaultValue: React.PropTypes.string,
    style: React.PropTypes.object,
    titleStyle: React.PropTypes.object,
    messageStyle: React.PropTypes.object,
    title: React.PropTypes.string.isRequired,
    rules: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        validator: React.PropTypes.oneOfType([
          React.PropTypes.string,
          React.PropTypes.func
        ]),
        message: React.PropTypes.string
      })
    )
  }

  static defaultProps = {
    rules: [],
    type: 'text',
    onChange: () => {},
    onBlur: () => {}
  }

  constructor(props) {
    super(props);
    this.state = {
      isError: false,
      message: '',
      uploadInfo: ''
    };

    this.getComponent = this.getComponent.bind(this);
    this.getProps = this.getProps.bind(this);
    this.validator = this.validator.bind(this);
    this.onChange = this.validator(this.props.onChange).bind(this);
    this.onBlur = this.validator(this.props.onBlur).bind(this);
  }

  componentDidMount() {
    const {rules, value, defaultValue} = this.props;

    if(rules) {
      this.validator()({
        target: {
          value: value || defaultValue || '',
          files: [
            {
              name: value || defaultValue || '',
              size: 0
            }
          ]
        }
      });
    }
  }

  render() {
    const {title, rules, titleStyle, messageStyle} = this.props;
    const {isError, message} = this.state;

    return (
      <div style={style.root}>
        <h4 style={[style.title(isError), titleStyle]}>
          <font style={style.isRequired(rules)}>*</font>
          {title}
        </h4>
        {this.getComponent()}
        <div style={style.message.root}>
          <p style={[style.message.text(isError), messageStyle]}>{message}</p>
        </div>
      </div>
    );
  }

  getComponent() {
    const {type} = this.props;
    const props = this.getProps();

    switch(type) {
      case 'textarea':
        return <textarea {...props} />;

      case 'file': {
        const {placeholder, id} = this.props;
        const {uploadInfo, isError} = this.state;
        const hasValue = this.state.uploadInfo !== '';

        delete props.id;
        delete props.value;
        invariant(this.props.id, 'You need to set "id" when you use type of file.');

        return [
          <label {...props}
                 htmlFor={this.props.id}
                 key="label"
                 style={[props.style, {
                   height: 'initial'
                 }, hasValue ? {} : style.placeholder(isError)]}
          >{hasValue ? uploadInfo : placeholder}</label>,
          <input type="file"
                 key="input"
                 id={id}
                 {...props}
                 style={style.hidden}
          />
        ];
      }

      default:
        return <input {...props} />;
    }
  }

  getProps() {
    const {isError} = this.state;
    const {rules, ...props} = this.props;
    const propsStyle = [style.input(rules, isError)];

    delete props.title;
    delete props.titleStyle;
    delete props.messageStyle;

    switch(props.type) {
      case 'textarea':
        propsStyle.push(style.textarea);
        break;

      case 'email':
        props.type = 'text';
        break;

      case 'file':
        propsStyle.push(style.label);
        break;

      default:
        break;
    }

    const newProps = Object.assign({}, props, {
      style: [propsStyle, props.style],
      onChange: this.onChange,
      onBlur: this.onBlur
    });

    return newProps;
  }

  validator(func = () => {}) {
    return e => {
      const {rules} = this.props;
      let uploadInfo = '';
      let isError = false;
      let message = '';

      rules.forEach(rule => {
        if(isError)
          return;

        switch(rule.validator) {
          case 'not empty':
            isError = validator.isEmpty(e.target.value);
            break;

          case 'email': {
            const email = validator.normalizeEmail(e.target.value);
            if(!email)
              isError = true;
            break;
          }

          case 'file':
            if(e.target.files.length !== 0) {
              const file = e.target.files[0];

              if(file.size === 0)
                isError = true;

              uploadInfo = `${file.name} (${Math.round(file.size * 0.001)} KB)`;
            } else
              isError = true;
            break;

          default:
            isError = rule.validator(e) || false;
            break;
        }

        if(isError)
          message = rule.message;
      });

      func({value: e.target.value, isError, e});

      this.setState({isError, uploadInfo, message});
    };
  }
}
