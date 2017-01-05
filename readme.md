# globbies

> Extends glob with support for ES6 and multiple patterns.

[![Travis Status](https://travis-ci.org/cjpatoilo/globbies.svg?branch=master)](https://travis-ci.org/cjpatoilo/globbies?branch=master)
[![AppVeyor Status](https://ci.appveyor.com/api/projects/status/dofn8iefcwu3q422?svg=true)](https://ci.appveyor.com/project/cjpatoilo/globbies)
[![Codacy Status](https://img.shields.io/codacy/grade/1a78b099b08f4cf08c6040a630f5c92a/master.svg)](https://www.codacy.com/app/cjpatoilo/globbies/dashboard)
[![Dependencies Status](https://david-dm.org/cjpatoilo/globbies/status.svg)](https://david-dm.org/cjpatoilo/globbies)
[![devDependencies Status](https://david-dm.org/cjpatoilo/globbies/dev-status.svg)](https://david-dm.org/cjpatoilo/globbies?type=dev)
[![Version Status](https://badge.fury.io/js/globbies.svg)](https://www.npmjs.com/package/globbies)
[![Download Status](https://img.shields.io/npm/dt/globbies.svg)](https://www.npmjs.com/package/globbies)


## Why it's awesome?

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.


## Install

```sh
$ npm i --save globbies
```


## Usage

```js
├── patrick/controller.js
├── sandy/controller.js
├── sheldon/controller.js
└── gary/controller.js
```

```js
const globbies = require('globbies');

globbies('../', files => console.log(files))
// ['patrick/controller.js', 'sandy/controller.js', 'sheldon/controller.js', 'gary/controller.js']
```


## Contributing

Want to contribute? Follow these [recommendations](https://github.com/cjpatoilo/globbies/blob/master/.github/contributing.md).


## License

Designed with ♥ by [CJ Patoilo](http://twitter.com/cjpatoilo). Licensed under the [MIT License](http://cjpatoilo.mit-license.org).
