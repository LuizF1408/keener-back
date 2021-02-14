const repository = require("../repositories/products");
const User = require("../models/User");


const getAll = () => repository.getAll();

const create = async (productsData) => {
    const user = new User({
      ...productsData,
     
    });
  
    return repository.create(user);
  };

  const del = async (id) => {
    const user = await repository.getById(id);
    if (!user.id) {
      throw { status: 404, message: "Not Found" };
    }
    return repository.del(id);
  };
  
  module.exports = {
    getAll,
    del,
  };
  