
exports.up = function(knex, Promise) {
  return knex.schema.createTable('health_data', (table) => {
    table.integer('id').references('id').inTable('users');
    table.dateTime('date');
    table.integer('sleep_duration');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('health_data');
};