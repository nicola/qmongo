/**
 * Use qm to use Q promises with Mongoose and use features not included such as Q.when, Q.fcall..
 *
 *    var newUser = new User();
 *
 *    Q.when(
 *      qm.exec(User.find({city: "Rome"}).limit(5)),
 *      qm.save(newUser)
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
       if (!err) {
         deferred.resolve (obj);
       } else {
         deferred.reject (err);
       }
     });
     return deferred.promise;
  },
  exec: function(query) {
    var deferred = Q.defer();
    query.exec(function(err, doc) {
      if (!err) {
        deferred.resolve (doc);
      } else {
        deferred.reject (err);
      }
    });
    return deferred.promise;
  }
};