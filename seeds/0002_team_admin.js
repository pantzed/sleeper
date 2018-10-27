
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('team_admin').del()
    .then(function () {
      // Inserts seed entries
      return knex('team_admin').insert([
        {team: 1, admin: 1},
      ]);
    });
};
