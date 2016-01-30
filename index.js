'use strict';
var exec = require('child_process').exec;
var regex = /tag:\s*(.+?)[,\)]/gi;
var cmd = 'git log --decorate --no-color';

module.exports = function(callback) {
  exec(cmd, {
    maxBuffer: Infinity
  }, function(err, data) {
    if (err) {
      callback(err);
      return;
    }

    var tags = [];

    data.split('\n').forEach(function(decorations) {
      var match;
      while (match = regex.exec(decorations)) {
        tags.push(match[1]);
      }
    });

    callback(null, tags);
  });
};
