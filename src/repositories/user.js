const knex = require("../../db");
const User = require("../models/User");
const tableName = "users";



/*
SELECT * FROM users WHERE id=?
*/
const getOne = async (filter) => {
  const [user] = await knex(tableName).where(filter);
  return new User(user);
};

const create = async (user) => {
  const [created] = await knex(tableName).insert(user).returning("*");
  return new User(created);
};

module.exports = {
  getOne,
  create,
};
