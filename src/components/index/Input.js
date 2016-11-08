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
    value: React.PropTypes.string,
    defaultValue: React.PropTypes.string,
    title: React.PropTypes.string.isRequired,
    message: React.PropTypes.string,
    rule: React.PropTypes.string,
    isError: React.PropTypes.bool,
    onChange: React.PropTypes.func,
    onBlur: React.PropTypes.func
  }

  static defaultProps = {
    isError: false,
    type: 'text',
    onChange: () => {},
    onBlur: () => {}
  }

  constructor(props) {
    super(props);
    this.state = {
      isError: this.props.isError,
      uploadInfo: ''
    };

    this.getComponent = this.getComponent.bind(this);
    this.getProps = this.getProps.bind(this);
    this.validator = this.validator.bind(this);
    this.onChange = this.validator('change').bind(this);
    this.onBlur = this.validator('blur').bind(this);
  }

  componentDidMount() {
    const {value, defaultValue} = this.props;

    if(value || defaultValue) {
      this.onChange({
        target: {
          value: value || defaultValue,
          files: [
            {
              name: value || defaultValue,
              size: 0
            }
          ]
        }
      });
    }
  }

  render() {
    const {title, message, rule} = this.props;
    const {isError} = this.state;

    return (
      <div style={style.root}>
        <h4 style={style.title(isError || this.props.isError)}>
          <font style={style.isRequired(rule)}>*</font>
          {title}
        </h4>
        {this.getComponent()}
        <div style={style.message.root}>
          <p style={style.message.text(isError || this.props.isError)}>{message}</p>
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
        const {uploadInfo} = this.state;
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
                 }, hasValue ? {} : style.placeholder]}
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
    const {rule} = this.props;
    const {isError} = this.state;
    const props = {...this.props};
    const propsStyle = [style.input(rule, isError || this.props.isError)];

    delete props.rule;
    delete props.title;
    delete props.message;
    delete props.isError;

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

    const newProps = Object.assign({
      style: propsStyle
    }, props, {
      onChange: this.onChange,
      onBlur: this.onBlur
    });

    return newProps;
  }

  validator(type) {
    const func = type === 'change' ? this.props.onChange : this.props.onBlur;

    return e => {
      const {rule} = this.props;
      let uploadInfo = '';
      let isError = false;

      switch(rule) {
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
          break;
      }

      func({value: e.target.value, isError, target: e.target});

      this.setState({isError, uploadInfo});
    };
  }
}
