
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('products', function (table) {
      table.increments('id');
      table.string('name');
      table.string('brand');
      table.string('category');
      table.date('date_achieved');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('products')
  ])
};
