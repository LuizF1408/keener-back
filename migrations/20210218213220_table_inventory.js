const tableInventory = "inventory";

exports.up = function (knex) {
    return knex.schema.createTable(tableUsers, (table) => {
        table.string("qtd");
        table.foreign("cod_prod").references("products.cod");

    });
  
};

exports.down = function (knex) {
return knex.schema.dropTable(tableInventory)
};
