const tableMovement = "movement";

exports.up = function (knex) {
    return knex.schema.createTable(tableUsers, (table) => {
        table.string("up");
        table.string("down");
        table.foreign("cod_prod").references("products.cod");
        table.foreign("cod_inven").references("inventory.cod_prod");
        

    });
  
};

exports.down = function (knex) {
return knex.schema.dropTable(tableMovement)
};
