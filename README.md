# boilr-module

[![NPM version](https://img.shields.io/npm/v/boilr-module.svg?style=flat-square)](https://npmjs.org/package/boilr-module)

NPM module boilerplate with good configs. _Heavily_ inspired by [nod](https://nod.js.org/)

## Features

-   [**Babel**](https://babeljs.io/) - Write next generation JavaScript today;
-   [**Jest**](https://facebook.github.io/jest) - JavaScript testing framework used by Facebook;
-   [**ESLint**](http://eslint.org/) - Make sure you are writing a quality code;
-   [**Prettier**](https://prettier.io/) - Enforces a consistent style by parsing your code and re-printing it;
-   [**Documentation**](http://documentation.js.org/) - A documentation system so good, you'll actually write documentation.

## Install

`git clone` this repo

```sh
$ git clone https://github.com/jforaker/boilr-module my-module
$ cd my-module
$ rm -rf .git
$ npm install # or yarn
```

Just make sure to edit `package.json`, `README.md` and `LICENSE` files accordingly with your module's info.

## Commands

```sh
$ npm test # run tests with Jest
$ npm run coverage # run tests with coverage and open it on browser
$ npm run lint # lint code
$ npm run docs # generate docs
$ npm run build # generate docs and transpile code
$ npm run changelog # generate CHANGELOG.MD
$ npm run watch # watch code changes and run scripts automatically
$ npm run patch # bump patch version and publish to npm e.g. 0.0.1
$ npm run minor # bump minor version and publish to npm e.g. 0.1.0
$ npm run major # bump major version and publish to npm e.g. 1.0.0
```

below is autogenerated by `npm run docs`

        "docs": "documentation readme src --section=DOCS"

## DOCS

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [sayHello](#sayhello)

### sayHello

This function says hello.

**Parameters**

-   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** a name to say hello to. (optional, default `'derf'`)

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** the greeting.
