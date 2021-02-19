const tableProducts = "products"
exports.up = function(knex) {
    return knex.schema.createTable(tableProducts, (table) => {
       table.string("name").notNull();
       table.string("type").notNull();
       table.string("value").notNull();
       table.string("cod").notNull().unique();
       table.string("qtd").notNull()
        
      
      });
  
};

exports.down = function(knex) {
  return knex.schema.dropTable(tableProducts)
};
