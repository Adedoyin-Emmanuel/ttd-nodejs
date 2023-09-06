/*

This file defines library functions for numbers.
I would write tests for them in the tests/numbers.test.js file.
*/

const add = (a, b) => {
  if (!a || !b) throw new Error("Missing arguments");
  return a + b;
};

module.exports = {
  add,
};
