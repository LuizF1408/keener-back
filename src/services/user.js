const User = require("../models/User")
const repository = require("../repositories/user")

const login = async (loginData) => {
    const user = await repository.getOne({ cpf: loginData.cpf });
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



  module.exports = {login}