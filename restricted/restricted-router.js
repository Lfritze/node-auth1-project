const router = require("express").Router();

const Users = require("./restricted-helpers.js");

const bcrypt = require("bcryptjs");

router.get("/", (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
