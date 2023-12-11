const { response } = require("./../utils");

const validateObjectId = (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return response(res, 404, "Invalid object id");
  }
  return response(res, 500, "Something went wrong, please try again later!");
};

module.exports = {
  validateObjectId,
};
