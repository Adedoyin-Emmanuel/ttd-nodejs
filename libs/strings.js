/*

This file defines library functions for strings.
I would write tests for them in the tests/string.test.js file.
*/

const printName = (name) => {
  if (!name) throw new Error("Invalid argument");

  return `Hello ${name}`;
};

module.exports = {
  printName,
};
