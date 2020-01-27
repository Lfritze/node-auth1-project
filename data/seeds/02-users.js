const bcrypt = require("bcrypt");

exports.seed = function(knex) {
  return knex("users").insert([
    { username: "lFritze", password: bcrypt.hashSync("weak-password", 8) },
    { username: "rKingsland", password: bcrypt.hashSync("123456", 8) },
    { username: "jayRow", password: bcrypt.hashSync("password", 8) }
  ]);
};
