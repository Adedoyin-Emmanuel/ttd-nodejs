const { rateLimit } = require("express-rate-limit");
const config = require("config");

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: config.get("App.request-limit"),
  messsage: {
    code: 429,
    status: "Too Many Requests",
    message: "Too many requests, try again later",
    data: {},
  },
});

console.log(config.get("App.request-limit"));

module.exports = limiter;
