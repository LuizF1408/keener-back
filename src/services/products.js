const repository = require("../repositories/products");
const Products = require("../models/Products");


const getAll = () => repository.getAll();

const create = async (productsData) => {
  const products = new Products({
    ...productsData,

  });

  return repository.create(products);
};

const del = async (cod) => {
  const user = await repository.del(cod);
  if (!user.cod) {
    throw { status: 404, message: "Not Found" };
  }
  return repository.del(cod);
};

module.exports = {
  create,
  getAll,
  del,
};
