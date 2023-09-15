/*
    This file defines library functions returing arrays.
    I would write tests for them in the tests/arrays.test.js file.
*/
const supportedClasses = () => {
  return ["JSS1", "JSS2", "JSS3", "SS1", "SS2", "SS3"];
};

const supportedNetworks = () => {
  return ["Mainnet Eth", "Sepolia Eth", "Goeril Eth"];
};

module.exports = {
  supportedClasses,
  supportedNetworks,
};
