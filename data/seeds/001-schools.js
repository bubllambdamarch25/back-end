
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('schools').del()
    .then(function () {
      // Inserts seed entries
      return knex('schools').insert([
        {id: 1, name: 'Lambda'},
        {id: 2, name: 'Hogwarts'}
      ]);
    });
};
