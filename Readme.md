# qmongo

Simple helper to use Q promises with Mongoose (and NodeJS).
It makes very simple to chain and combine promises (especially with Q.when)

## Installation

Server side

    $ npm install qmongo


## Usage

```js

var qmongo = require('qmongo');
var mongoose = require('mongoose');

[...]

var newUser = new User();
Q.when(
  qmongo.exec(User.find({city: "Rome"}).limit(5)),
  qmongo.save(newUser)
).then(function(args) {
  console.log(args);
});

```

## License

MIT
