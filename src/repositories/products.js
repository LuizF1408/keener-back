const knex = require("../../db");
const Products = require("../models/Products");
const tableName = "users";


/*
SELECT * FROM meals
*/
const getAll = async () => {
    const products = await knex(tableName);
    return products.map((product) => new Products(product));
};

const create = async (product) => {
    const [created] = await knex(tableName).insert(product).returning("*");
    return new User(created);
};

const del = (cod) => knex(tableName).where({ cod }).del();


module.exports = {
    getAll,
    create,
    del,
};
