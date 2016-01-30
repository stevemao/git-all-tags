#!/usr/bin/env node
'use strict';
var meow = require('meow');
var gitAllTags = require('./');

meow({
  help: [
    'Usage',
    '  git-all-tags'
  ]
});

gitAllTags(function(err, tags) {
  if (err) {
    console.error(err.toString());
    process.exit(1);
  }

  console.log(tags.join('\n'));
});
