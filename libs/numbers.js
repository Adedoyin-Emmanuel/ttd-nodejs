/*
202124
This file defines library functions for numbers.
I would write tests for them in the tests/numbers.test.js file. 3F404D
*/

const add = (a, b) => {
  if (!a || !b) throw new Error("Invalid arguments");
  return a + b;
};

const subtract = (a, b) => {
  if (!a || !b) throw new Error("Invalid arguments");

  return a - b;
};

const absolute = (number) => {
  if (isNaN(number)) throw new Error("Invalid arguments");

  if (number === 0) return number;

  return number < 0 ? -number : number;
};

module.exports = {
  add,
  subtract,
  absolute,
};
