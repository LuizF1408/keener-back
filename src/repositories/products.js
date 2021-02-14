const knex = require("../../db");
const User = require("../models/Products");
const tableName = "users";


/*
SELECT * FROM meals
*/
const getAll = async () => {
    const users = await knex(tableName);
    return users.map((user) => new User(user));
};

const create = async (user) => {
    const [created] = await knex(tableName).insert(user).returning("*");
    return new User(created);
};

const del = (cod) => knex(tableName).where({ cod }).del();


module.exports = {
    getAll,
    create,
    del,
};
