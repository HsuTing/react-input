# React-input

This project uses [radium](https://github.com/FormidableLabs/radium) to make react input.

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
            change={this.change}
      >
        <Input title="Text"
               placeholder="text"
        />
      </Form>
    );
  }

  change(data) {
    console.log(data);
  }
}
```

#### Form

| props | usage |
|-------|-------|
| data | Array of default data. Every elemenet is an object of `value` and `isError`. `value` is default value of input and `isError` will be `true` when data is error. |
| change | You will get `data` when every value of input is changed. |

#### Input

| props | usage |
|-------|-------|
| rules | The array of rule using to check data. Every rule is an object of `validator` and `message`. `validator` is function or string to check data. `message` will show when `validator` return false. You can also use `options` when you need. |
| title | Title of input. |
| titleStyle | Style of title. |
| messageStyle | Style of message. |

- validator
  - Use [validator](https://www.npmjs.com/package/validator).
  - `isEmail`: Use `validator.normalizeEmail`(not `validator.isEmail`).
  - `isFile`: Use to check file.
  - You can write a function to check data.

  ```javascript
  rules={[{
    validator: 'isEmpty',
    message: 'Can not be empty'
  }, {
    validator: e => {
      if(e.target.value === '1')
        return false;
      return true;
    },
    message: 'test'
  }]}
  ```

- You can not only use type of `input` in `html5`, but alos you can use `textarea`.

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
