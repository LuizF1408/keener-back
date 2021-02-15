const User = require("../models/User")
const repository = require("../repositories/user")
const uuid = require("uuid")

const login = async (loginData) => {
  const user = await repository.getOne({ username: loginData.username });
  if (!user) {
    throw { status: 401, message: "Not authorized" };
  }

  if (loginData.password !== user.password) {
    throw { status: 401, message: "Not authorized" };
  }

  return {
    user: user.view(),

  };
};

const create = async (userData) => {
  const id = uuid.v4()
  const user = new User({
    ...userData,
    id:id

  });

  return repository.create(user);
};




module.exports = { login,create}