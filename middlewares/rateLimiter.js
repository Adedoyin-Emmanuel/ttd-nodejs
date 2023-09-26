const { rateLimit } = require("express-rate-limit");
const config = require("config");

const rateLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: config.get("App.request-limit"),
  message: {
    code: 429,
    status: "Too many requests",
    message: "Too many requests chief, try again later",
    data: {},
  },
});

console.log(config.get("App.request-limit"));

module.exports = { rateLimiter };
