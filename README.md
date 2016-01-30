#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage Status][coveralls-image]][coveralls-url]

> Get all git tags of your repository in reverse chronological order

*Note:* since lightweight tags do not store date information, the date of a tag is the date of the commit that is tagged on. If two tags on one commit, the order is not guaranteed.


## Install

```sh
$ npm install --save git-all-tags
```


## Usage

```js
var gitAllTags = require('git-all-tags');

gitAllTags(function(err, tag) {
  console.log(tag);
  //=> [ 'v2.0.0', 'v1.0.0' ]
});
```

```sh
$ npm install --global git-all-tags
$ git-all-tags
v2.0.0
v1.0.0
```


## License

MIT © [Steve Mao](https://github.com/stevemao)


[npm-image]: https://badge.fury.io/js/git-all-tags.svg
[npm-url]: https://npmjs.org/package/git-all-tags
[travis-image]: https://travis-ci.org/stevemao/git-all-tags.svg?branch=master
[travis-url]: https://travis-ci.org/stevemao/git-all-tags
[daviddm-image]: https://david-dm.org/stevemao/git-all-tags.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/stevemao/git-all-tags
[coveralls-image]: https://coveralls.io/repos/stevemao/git-all-tags/badge.svg
[coveralls-url]: https://coveralls.io/r/stevemao/git-all-tags
