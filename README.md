# React-input

react input

## Getting Started

First, install packages using [yarn](https://yarnpkg.com/) (we assume you have pre-installed [npm](https://www.npmjs.com/) and [node.js](https://nodejs.org/)).

```
yarn install
```

## Usage

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
 © hsuting
