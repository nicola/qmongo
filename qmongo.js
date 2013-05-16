/**
 * Use qmongo to use Q promises with Mongoose and use features not included such as Q.when, Q.fcall..
 *
 *    var newUser = new User();
 *
 *    Q.when(
 *      qmongo.exec(User.find({city: "Rome"}).limit(5)),
 *      qmongo.save(newUser)
 *    ).then(function(args) {
 *      console.log(args);
 *    });
 *
 */

var Q = require("q");

var _op = function(key) {
  return function(obj) {
    var deferred = Q.defer();
    obj[key](function(err) {
      !err ? deferred.resolve(obj) : deferred.reject(obj);
    });
    return deferred.promise;
  }
}

module.exports = {
  save: _op('save'),
  exec: _op('exec'),
};
