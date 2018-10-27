
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('teams').del()
    .then(function () {
      // Inserts seed entries
      return knex('teams').insert([
        {id: 1, user: 0, team_name: 'Galvanize WDI G91'},
        {id: 1, user: 1, team_name: 'Galvanize WDI G91'},
        {id: 1, user: 2, team_name: 'Galvanize WDI G91'},
        {id: 1, user: 3, team_name: 'Galvanize WDI G91'},
        {id: 1, user: 4, team_name: 'Galvanize WDI G91'},
        {id: 1, user: 5, team_name: 'Galvanize WDI G91'},
        {id: 1, user: 6, team_name: 'Galvanize WDI G91'},
      ]);
    });
};
