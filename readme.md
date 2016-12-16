<a align="center" href="http://cjpatoilo.com/globbies"><img width="100%" src="http://cjpatoilo.com/globbies/images/thumbnail.png" alt="Extends glob with support for ES6 and multiple patterns."></a>

> Extends glob with support for ES6 and multiple patterns.

[![Travis Status](https://travis-ci.org/cjpatoilo/globbies.svg?branch=master)](https://travis-ci.org/cjpatoilo/globbies?branch=master)
[![AppVeyor Status](https://ci.appveyor.com/api/projects/status/efthn2yp6c57gu1b?svg=true)](https://ci.appveyor.com/project/cjpatoilo/globbies)
[![Codacy Status](https://img.shields.io/codacy/grade/848fb4bd6902434fab0bcfb5461284fe/master.svg)](https://www.codacy.com/app/cjpatoilo/globbies/dashboard)
[![Dependencies Status](https://david-dm.org/cjpatoilo/globbies/status.svg)](https://david-dm.org/cjpatoilo/globbies)
[![Version Status](https://badge.fury.io/js/globbies.svg)](https://www.npmjs.com/package/globbies)
[![Download Status](https://img.shields.io/npm/dt/globbies.svg)](https://www.npmjs.com/package/globbies)
[![Gitter Chat](https://img.shields.io/badge/gitter-join_the_chat-4cc61e.svg)](https://gitter.im/cjpatoilo/globbies)


## Why it's awesome?

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.


## Install

```sh
$ npm i --save globbies
```

Install this npm package with `-g` to global use or with `-D` to add the package as a devDependency in the `package.json` file of your project.


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

Designed with ♥ by [CJ Patoilo](http://cjpatoilo.com). Licensed under the [MIT License](http://cjpatoilo.mit-license.org).
