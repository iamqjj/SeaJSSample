define(function(require, exports) {
  var part1sub = require('./part1sub.js');

  exports.init = function() {
    part1sub.log("part1");
  };
});