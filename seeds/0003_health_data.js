
exports.seed = function(knex, Promise) {
  let fakeDate = new Date();
  // Deletes ALL existing entries
  return knex('health_data').del()
    .then(function () {
      // Inserts seed entries
      return knex('health_data').insert([
        {id: 0, date: fakeDate, sleep_duration: 500},
        {id: 1, date: fakeDate, sleep_duration: 300},
        {id: 2, date: fakeDate, sleep_duration: 350},
        {id: 3, date: fakeDate, sleep_duration: 400},
        {id: 4, date: fakeDate, sleep_duration: 550},
        {id: 5, date: fakeDate, sleep_duration: 450},
        {id: 6, date: fakeDate, sleep_duration: 425}
      ]);
    });
};
