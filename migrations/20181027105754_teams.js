
exports.up = function(knex, Promise) {
  return knex.schema.createTable('teams', (table) => {
    table.integer('id').notNullable;
    table.integer('user').references('id').inTable('users');
    table.string('team_name').notNullable;
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('teams');
};
