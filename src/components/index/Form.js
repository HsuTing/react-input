'use strict';

import React from 'react';
import radium from 'radium';

import Input from './Input';
import Select from './Select';

@radium
export default class Form extends React.Component {
  static propTypes = {
    children: React.PropTypes.node.isRequired,
    data: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        value: React.PropTypes.string.isRequired
      })
    ).isRequired,
    change: React.PropTypes.func
  }

  static defaultProps = {
    data: [],
    change: () => {}
  }

  constructor(props) {
    super(props);
    this.state = {
      data: this.getDefaultData.bind(this)()
    };

    this.changeData = this.changeData.bind(this);
  }

  render() {
    const {data} = this.state;
    const props = {...this.props};
    let count = 0;

    delete props.data;
    delete props.change;

    return (
      <form {...props}>
        {React.Children.map(this.props.children, (node, index) => {
          if(node.type.displayName !== React.createElement(Input, {title: 'title', type: 'text'}).type.displayName &&
             node.type.displayName !== React.createElement(Select, {title: 'title'}).type.displayName) {
            count = count - 1;
            return node;
          }

          return React.cloneElement(node, {
            value: data[index + count].value,
            onChange: this.changeData(index + count, node.props.onChange)
          });
        })}
      </form>
    );
  }

  getDefaultData() {
    const {data} = this.props;
    let count = 0;

    return React.Children.map(this.props.children, (node, index) => {
      if(node.type.displayName !== React.createElement(Input, {title: 'title', type: 'text'}).type.displayName &&
         node.type.displayName !== React.createElement(Select, {title: 'title'}).type.displayName) {
        count = count - 1;
        return null;
      }

      return {
        value: data[index + count] ? data[index + count].value || '' : '',
        isError: data[index + count] ? data[index + count].isError || false : false
      };
    });
  }

  changeData(index, nodeChange = () => {}) {
    const {change} = this.props;
    return data => {
      const newData = [...this.state.data];

      Object.keys(data).forEach(key => {
        newData[index][key] = data[key];
      });

      nodeChange(data);
      change(newData);

      this.setState({
        data: newData
      });
    };
  }
}
