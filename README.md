key-gen
=======

A lightweight node.js key generation app.

## v0.0.1

## Installation

```sh
$ npm install key-gen
```

## Usage

```js
var keyGen = require('key-gen');

var options = {
  prefix = ['identifier1', 'identifier2', 'identifier3'],
  data   = {
    data1: 'data1',
    data2: 'data2',
    data3: 'data3'
  }
}

var key = keyGen.generate(options);
```

## Run tests

```sh
$ make test
```

## License

Released fully under [MIT license] (http://viktort.mit-license.org)
