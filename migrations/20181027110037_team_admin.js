exports.up = function(knex, Promise) {
  return knex.schema.createTable('team_admin', (table) => {
    table.integer('team').notNullable;
    table.integer('admin').references('id').inTable('users'); 
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('team_admin');
};

