const Users = require("../users/users-helpers.js");

const bcrypt = require("bcryptjs");

module.exports = (req, res, next) => {
  // let { username, password} = req.headers;

  if (req.session && req.session.username) {
    next();
  } else {
    res.status(401).json({ you: "Cannot pass!" });
  }
};
