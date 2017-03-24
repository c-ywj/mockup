exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('votes', function (table) {
      table.increments('id').primary();
      table.integer('products_id').references('products.id').onDelete('CASCADE');
      table.integer('users_id').references('users.id').onDelete('CASCADE');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('votes')
  ])
};
