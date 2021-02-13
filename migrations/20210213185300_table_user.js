const tableUsers = "users";

exports.up = function (knex) {
    return knex.schema.createTable(tableUsers, (table) => {
        table.string("username").notNull().unique();
        table.string("password").notNull();
        table.string("id").notNull().unique();

    });
  
};

exports.down = function (knex) {
return knex.schema.dropTable(tableUsers)
};
