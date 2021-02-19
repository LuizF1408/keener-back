const uuid = require("uuid");
const tableUsers = 'users';

exports.seed = function (knex) {
  return knex(tableUsers)
    .del()
    .then(function () {
        const id = uuid.v4()
      
      return knex(tableUsers).insert([
        {
          id: id,
          username: "Luiz Fernando",
          password:"luiz1234"
         
        },
      ]);
    });
};
