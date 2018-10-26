
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id');
    table.string('username').notNullable;
    table.string('password', 64).notNullable;
    table.string('first');
    table.string('last');
    table.string('fitbit_auth');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};

