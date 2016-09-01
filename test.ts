/// <reference path="bundle.d.ts" />

import assert = require('assert');
import once = require('once');

const test = function () {
  return 'test';
} as {
  (): string,
  foo: boolean
};

test.foo = true;

const t1 = once(test);

assert.equal(typeof once, 'function');
assert.equal(typeof t1, 'function');
assert.equal(t1(), 'test');
assert.equal(t1.foo, true);
