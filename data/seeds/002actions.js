
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        { description: 'Some action description', notes: 'Some notes', complete: 0, project_id: 3 },
        { description: 'Some action description', notes: 'Some notes', complete: 0, project_id: 1 },
        { description: 'Some action description', notes: 'Some notes', complete: 0, project_id: 2 }
      ]);
    });
};
