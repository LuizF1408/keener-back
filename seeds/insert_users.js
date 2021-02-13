const uuid = require("uuid")
const tableUsers = 'users';

exports.seed = function (knex) {
  return knex("users")
    .del()
    .then(function () {
        const id = uuid.v4()
      
      return knex("users").insert([
        {
          id: id,
          username: "Luiz Fernando",
          password:"luiz1234"
         
        },
      ]);
    });
};
