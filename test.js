'use strict';
var assert = require('assert');
var equal = assert.deepEqual;
var gitAllTags = require('./');
var shell = require('shelljs');
var writeFileSync = require('fs').writeFileSync;
var gitDummyCommit = require('git-dummy-commit');

shell.config.silent = true;
shell.rm('-rf', 'tmp');
shell.mkdir('tmp');
shell.cd('tmp');
shell.exec('git init');

it('should error if no commits found', function(done) {
  gitAllTags(function(err) {
    assert(err);

    done();
  });
});

it('should get no tags', function(done) {
  writeFileSync('test1', '');
  shell.exec('git add --all && git commit -m"First commit"');

  gitAllTags(function(err, tags) {
    equal(tags, []);

    done();
  });
});

it('should get the tag', function(done) {
  writeFileSync('test2', '');
  shell.exec('git add --all && git commit -m"Second commit"');
  shell.exec('git tag v2.0.0');

  gitAllTags(function(err, tags) {
    equal(tags, ['v2.0.0']);

    done();
  });
});

it('should get both tags', function(done) {
  writeFileSync('test3', '');
  shell.exec('git add --all && git commit -m"Third commit"');
  shell.exec('git tag va.b.c');

  gitAllTags(function(err, tags) {
    equal(tags, ['va.b.c', 'v2.0.0']);

    done();
  });
});

it('should get all tags if two tags on the same commit', function(done) {
  shell.exec('git tag v4.0.0');

  gitAllTags(function(err, tags) {
    equal(tags, ['va.b.c', 'v4.0.0', 'v2.0.0']);

    done();
  });
});

it('should still work if I run it again', function(done) {
  gitAllTags(function(err, tags) {
    equal(tags, ['va.b.c', 'v4.0.0', 'v2.0.0']);

    done();
  });
});

it('should be in reverse chronological order', function(done) {
  writeFileSync('test4', '');
  shell.exec('git add --all && git commit -m"Fourth commit"');
  shell.exec('git tag v1.0.0');

  gitAllTags(function(err, tags) {
    equal(tags, ['v1.0.0', 'va.b.c', 'v4.0.0', 'v2.0.0']);

    done();
  });
});

it('should work with empty commit', function(done) {
  shell.rm('-rf', '.git');
  shell.exec('git init');
  gitDummyCommit('empty commit');
  shell.exec('git tag v1.1.0');
  gitDummyCommit('empty commit2');
  gitDummyCommit('empty commit3');

  gitAllTags(function(err, tags) {
    equal(tags, ['v1.1.0']);

    done();
  });
});
