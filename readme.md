<a href="https://github.com/cjpatoilo/globbies"><img width="100%" src="https://repository-images.githubusercontent.com/76652125/af4a0a80-f5bd-11e9-83ba-b3e38922a774" alt="Globbies | Extends glob with support for ES6 and multiple patterns."></a>

> Extends glob with support for ES6 and multiple patterns.

[![Travis Status](https://travis-ci.org/cjpatoilo/globbies.svg?branch=master)](https://travis-ci.org/cjpatoilo/globbies?branch=master)
[![AppVeyor Status](https://ci.appveyor.com/api/projects/status/dofn8iefcwu3q422?svg=true)](https://ci.appveyor.com/project/cjpatoilo/globbies)
[![Codacy Status](https://img.shields.io/codacy/grade/1a78b099b08f4cf08c6040a630f5c92a/master.svg)](https://www.codacy.com/app/cjpatoilo/globbies/dashboard)
[![Dependencies Status](https://david-dm.org/cjpatoilo/globbies/status.svg)](https://david-dm.org/cjpatoilo/globbies)
[![devDependencies Status](https://david-dm.org/cjpatoilo/globbies/dev-status.svg)](https://david-dm.org/cjpatoilo/globbies?type=dev)
[![Version Status](https://badge.fury.io/js/globbies.svg)](https://www.npmjs.com/package/globbies)
[![Download Status](https://img.shields.io/npm/dt/globbies.svg)](https://www.npmjs.com/package/globbies)

## Why it's awesome

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

## Getting Started

**Install with npm**

```sh
$ npm install globbies
```

**Usage**

```js
├── patrick/controller.js
├── sandy/controller.js
├── sheldon/controller.js
└── gary/controller.js
```

```js
const globbies = require('globbies')

globbies('../**/controller.js', (err, data) => console.log(data))
// => ['patrick/controller.js', 'sandy/controller.js', 'sheldon/controller.js', 'gary/controller.js']
```

## Contributing

Want to contribute? Follow these [recommendations](https://github.com/cjpatoilo/globbies#contributing).

## License

Designed with ♥ by [CJ Patoilo](https://twitter.com/cjpatoilo). Licensed under the [MIT License](https://github.com/cjpatoilo/globbies#license).
