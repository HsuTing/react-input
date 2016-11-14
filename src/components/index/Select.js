'use strict';

import React from 'react';
import radium from 'radium';
import Input from './Input';

@radium
export default class Select extends React.Component {
  static propTypes = {
    value: React.PropTypes.string
  }

  static defaultProps = {
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Input {...this.props}
             type="hidden"
      >
        {this.props.value}
      </Input>
    );
  }
}
