/*
    This file defines library functions returing object.
    I would write tests for them in the tests/objects.test.js file.
*/

const getPosition = (city) => {
  return {
    city: city,
    longitude: 0.28,
    latitude: 2.8,
  };
};

const getUser = (id) => {
  return {
    id: id,
    name: "Adedoyin Emmanuel",
    hobby: "programming",
  };
};

module.exports = {
  getPosition,
  getUser,
};
