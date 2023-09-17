/*
    This file defines library functions returing errors and we are going to test those errors.
    I would write tests for them in the tests/objects.test.js file.
*/

const throwError = () => {
  throw new Error("I'm an errror 😂");
};

const throwErrorUsingCatch = () => {
  try {
    /*I know this method doesn't exist on a number but we 
        want to create an error purposely */
    const favNumber = 28;
    favNumber.toUpperCase();
  } catch (error) {
    throw new Error(error);
  }
};


module.exports = {
  throwError,
  throwErrorUsingCatch,
};


