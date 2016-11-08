'use strict';

import React from 'react';
import radium from 'radium';
import Style from 'componentsShare/Style';

import Input from './Input';
import Form from './Form';

import style from './style/index';

import {data} from './static';

@radium
export default class Index extends React.Component {
  render() {
    return (
      <div style={style}>
        <Style />
        <Form data={data}>
          <Input title="Text"
                 placeholder="text"
          />
          <Input title="Text(not empty)"
                 placeholder="text"
                 rules="not empty"
                 message="Can not be empty"
          />
          <Input type="email"
                 title="Email"
                 placeholder="email"
                 rules="email"
                 message="Invalid email"
          />
          <Input type="file"
                 title="File"
                 placeholder="file"
                 rules="file"
                 message="no file"
                 id="file"
          />
          <Input type="textarea"
                 title="Textarea"
                 placeholder="textarea"
                 rules="not empty"
                 message="Can not be empty"
          />
        </Form>
      </div>
    );
  }
}
