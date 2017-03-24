
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
        id: 1,
        name: 'flo',
        email: 'flo@flo.com',
        password: '123',
        role: 'regular'},
      ]);
    });
};
