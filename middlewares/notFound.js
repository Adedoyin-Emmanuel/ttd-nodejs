const { response } = require("./../utils");

const notFound = (req, res) => {
  return response(res, 404, "Route not found");
};

module.exports = {
  notFound,
};
