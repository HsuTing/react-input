# React-input

react input

## Getting Started

```
npm install react --save
npm install git+https://github.com/HsuTing/react-input.git --save
```

## Usage

[demo](http://hsuting.com/react-input/) and [code](./src/components/index/Index.js)

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
            change={this.onChange}
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

#### Form

| props | usage |
|-------|-------|
| data | Array of default data. Elemenet in array is an object of `value` and `isError`. `value` is default value of input and `isError` will be `true` when data is error. |
| change | You will get `data` when every value of input is changed and you can return a `data` when you need to check `data` is correct. |

#### Input

| props | usage |
|-------|-------|
| isError | You cans control `isError` using `props`. |
| rule | The rule of checking data. |
| type | Type of the input. `default: text` |

- rule
  - `not empty`: check if value is empty.
  - `email`: check if value is email.
  - `file`: check if file have size.
- type
  - all type of `input`
  - `textarea`

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
