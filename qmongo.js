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

module.exports = {
  save: function(obj) {
    var deferred = Q.defer();
    obj.save(function(err) {
      !err ? deferred.resolve(obj) : deferred.reject(obj);
    });
    return deferred.promise;
  },
  exec: function(query) {
    var deferred = Q.defer();
    query.exec(function(err, doc) {
      !err ? deferred.resolve(obj) : deferred.reject(obj);
    });
    return deferred.promise;
  }
};
