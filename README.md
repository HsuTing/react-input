# React-input

react input

## Getting Started

```
npm install react --save
npm install git+https://github.com/HsuTing/react-input.git --save
```

## Usage

[demo](http://hsuting.com/react-input/)

#### Components

- Form
- Input

#### Example

```javascript
import React from 'react';
import {Form, Input} from 'react-input';

const data = [
  {value: '1'}
];

class Example extends React.Component {
  render() {
    return (
      <Form data={data}
            onChange={this.onChange}
      >
        <Input title="Text"
               placeholder="text"
        />
      </Form>
    );
  }

  onChange(data) {
    return data;
  }
}
```

## Develop

First, install packages using [yarn](https://yarnpkg.com/) (we assume you have pre-installed [npm](https://www.npmjs.com/) and [node.js](https://nodejs.org/)).

```
yarn install
```

You can see `scripts` in `package.json`.
- `production`: `production` mode.
- `watch`: watch files.
- `favicon`: render `favicon.ico` for every platform.
- `build`: make a default html with `pug` and `react server side rendering`.

## Folders
We use `babel-plugin-module-resolver`. As a result, you just need to use short name to import file.

#### src/utils(short name: utils)
Util functions.

#### src/constants(short name: constants)
Constant variables.

#### src/public(short name: public)
Main js files.

#### src/components(short name: components)
UI components.

#### src/components/share(short name: componentsShare)
All sharing UI components(like `footer` and `header`).

#### src/components/share/radium(short name: componentsShareRadium)
Some componets need to use `radium` to transform(like `Link` in `react-router`).

## License
MIT © hsuting
