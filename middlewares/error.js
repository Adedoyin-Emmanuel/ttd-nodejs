const { response } = require("./../utils");

const errorHandler = (err, req, res, next) => {
  console.log(err);

  return response(res, 500, "Something went wrong, please try again later!");
};

module.exports = {
  errorHandler,
};
