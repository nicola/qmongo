# qm

Simple helper to use Q promises with Mongoose.
It makes very simple to chain and combine promises (especially with Q.when)

## Installation

Server side

    $ npm install qm


## Usage

```js

var qm = require('qm');
var mongoose = require('mongoose');

[...]

var newUser = new User();
Q.when(
  qm.exec(User.find({city: "Rome"}).limit(5)),
  qm.save(newUser)
).then(function(args) {
  console.log(args);
});

```

## License

MIT
