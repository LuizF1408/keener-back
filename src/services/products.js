const repository = require("../repositories/products");
const User = require("../models/User");


const getAll = () => repository.getAll();

const create = async (productsData) => {
    const user = new User({
      ...productsData,
     
    });
  
    return repository.create(user);
  };

  const del = async (cod) => {
    const user = await repository.getById(cod);
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
  