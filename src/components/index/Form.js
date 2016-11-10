'use strict';

import React from 'react';
import invariant from 'invariant';

import Input from './Input';

export default class Form extends React.Component {
  static propTypes = {
    data: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        value: React.PropTypes.string.isRequired,
        isError: React.PropTypes.boolean
      })
    ).isRequired,
    children: React.PropTypes.node.isRequired,
    change: React.PropTypes.func
  }

  static defaultProps = {
    data: [],
    change: data => {
      return data;
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };

    this.checkNumber = this.checkNumber.bind(this);
    this.changeData = this.changeData.bind(this);
  }

  componentDidMount() {
    this.checkNumber();
  }

  componentDidUpdate() {
    this.checkNumber();
  }

  render() {
    const {data} = this.state;
    const props = {...this.props};

    delete props.data;
    delete props.change;

    return (
      <form {...props}>
        {React.Children.map(this.props.children, (node, index) => {
          if(node.type.displayName !== React.createElement(Input, {title: 'title', type: 'text'}).type.displayName)
            return node;

          return React.cloneElement(node, {
            value: data[index] ? data[index].value || '' : '',
            isError: data[index] ? data[index].isError || false : false,
            onChange: this.changeData(index, node.props.onChange)
          });
        })}
      </form>
    );
  }

  checkNumber() {
    let count = 0;

    React.Children.forEach(this.props.children, (node, index) => {
      if(node.type.displayName !== React.createElement(Input, {title: 'title', type: 'text'}).type.displayName)
        return;

      count = count + 1;
    });

    invariant(count === this.state.data.length, 'The length of your data should be equal to the length of your childrens.');
  }

  changeData(index, nodeChange = () => {}) {
    return data => {
      const newData = [...this.state.data];

      Object.keys(data).forEach(key => {
        newData[index][key] = data[key];
      });
      nodeChange(data);

      this.setState({
        data: this.props.change(newData) || newData
      });
    };
  }
}
