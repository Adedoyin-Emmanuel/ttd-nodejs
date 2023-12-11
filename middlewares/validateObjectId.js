const { response } = require("./../utils");

const { default: mongoose } = require("mongoose");

const validateObjectId = (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return response(res, 404, "Invalid object id");
  }
  next();
};

module.exports = {
  validateObjectId,
};
