'use strict';

import React from 'react';
import radium, {StyleRoot} from 'radium';
import ArrowDropDown from 'react-icons/lib/md/arrow-drop-down';
import Input from './Input';

import inputStyle from './style/input';
import selectStyle from './style/select';

const rootParentStyle = {
  position: 'relative',
  zIndex: '10',
  cursor: 'pointer'
};

const rootStyle = {
  position: 'absolute',
  margin: '0px'
};

const iconStyle = {
  width: '100%',
  height: '100%',
  color: 'inherit',
  verticalAlign: 'top'
};

@radium
export default class Select extends React.Component {
  static propTypes = {
    value: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    onBlur: React.PropTypes.func,
    onChange: React.PropTypes.func,
    style: React.PropTypes.object,
    children: React.PropTypes.node,
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
    value: ''
  }

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      isError: false,
      isShow: false
    };

    this.toggleSelect =  this.toggleSelect.bind(this);
    this.blur = this.blur.bind(this);
    this.change = this.change.bind(this);
  }

  render() {
    const {placeholder, rules, children, style, ...props} = this.props;
    const {value, isError, isShow} = this.state;

    return (
      <Input {...props}
             value={value}
             rules={rules}
             directValue={value}
             type="hidden"
             onChange={this.change}
      >
        <div style={[inputStyle.input(rules, isError), style, rootParentStyle]}
             tabIndex="1"
             onClick={this.toggleSelect}
             onBlur={this.blur}
        >
          {value === '' ? placeholder : value}
          <div {...props}
               key="root"
               style={[
                 inputStyle.input(rules, isError),
                 selectStyle.root(isShow), style,
                 value === '' ? inputStyle.placeholder(isError) : {},
                 rootStyle
               ]}
          >
            {isShow ?
            React.Children.map(children, node => {
              return React.cloneElement(node, {
                style: [selectStyle.item(node.key === value), node.props.style],
                onClick: this.changeValue.bind(this, node.key, node.props.onClick)
              });
            }, this) : null}
          </div>
          <StyleRoot style={selectStyle.icon(isShow)}>
            <ArrowDropDown style={iconStyle} />
          </StyleRoot>
        </div>
      </Input>
    );
  }

  blur(e) {
    if(this.props.onBlur)
      this.props.onBlur(e);
    this.setState({isShow: false});
  }

  toggleSelect() {
    this.setState({isShow: !this.state.isShow});
  }

  changeValue(value, click = () => {}, e) {
    click(e);
    this.setState({value});
  }

  change(data) {
    const {isError} = data;

    if(this.props.onChange)
      this.props.onChange(data);
    this.setState({isError});
  }
}
